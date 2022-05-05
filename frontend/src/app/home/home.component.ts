import { Component, OnInit } from '@angular/core';
import {PostService} from "../services/post.service";
import {Post} from "../model/post";
import {Event} from "../model/Event";
import {EventService} from "../services/event.service";
import {ArticleService} from "../services/article.service";
import {ArticleResponse} from "../model/articleResponse";
import {CommentPost} from "../model/comment-post";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts!:Post[]
  events!: Event[]
  articles!:ArticleResponse[]
  commentsPost!: CommentPost[]
  description!:string;
  createdDate!: Date;

  constructor(private postService:PostService, private eventService:EventService, private articleService:ArticleService) { }

  ngOnInit(): void {
    this.getData()
    this.getEvents()
  }

  getData() {
    this.postService.getAllPosts().subscribe((results:Post[]) =>
      this.posts = results
    )
  }

  onAddPost(description: string) {
    this.postService.createPost(description).subscribe()
    window.location.reload()
  }

  deletePost(postId:number) {
    this.postService.deletePost(postId).subscribe()
    window.location.reload()
  }

  getArticles() {
    this.articleService.getAllArticles().subscribe(( res:ArticleResponse[] )=>
      this.articles = res
    )
  }

  getEvents(){
    this.eventService.getEvents().subscribe((res:Event[]) =>
      this.events = res
    )
  }
}
