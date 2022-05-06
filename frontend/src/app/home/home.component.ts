import { Component, OnInit } from '@angular/core';
import {PostService} from "../services/post.service";
import {Post} from "../model/post";
import {Event} from "../model/Event";
import {EventService} from "../services/event.service";
import {ArticleService} from "../services/article.service";
import {ArticleResponse} from "../model/articleResponse";
import {CommentPost} from "../model/comment-post";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageURL : any
  file : any
  posts!:Post[]
  events!: Event[]
  articles!:ArticleResponse[]
  commentsPost!: CommentPost[]
  description!:string;
  createdDate!: Date;
  post : Post = new Post();

  constructor(private postService:PostService, private eventService:EventService, private articleService:ArticleService, private toastr: ToastrService) { }

  clearForm(){
    (<HTMLFormElement>document.getElementById("savePost")).reset();
  }
  ngOnInit(): void {
    this.getData()
    this.getEvents()
  }

  getData() {
    this.postService.getAllPosts().subscribe((results:Post[]) =>
      this.posts = results
    )
  }

  onAddPost() {
    var postData = JSON.stringify(this.post);
      this.postService.createPost(postData,this.file ).subscribe(res=>{console.log(res);
        this.toastr.success("Post Added Succesfully"); this.getData(); this.clearForm()});

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

  onSelectedImage(e: any){
    //this.userFile = e.target.files[0];
    // @ts-ignore
    this.file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = (res=>{this.imageURL = reader.result})
    console.log(this.imageURL);
  }
}
