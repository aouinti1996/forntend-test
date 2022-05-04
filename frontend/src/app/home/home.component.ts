import { Component, OnInit } from '@angular/core';
import {PostService} from "../services/post.service";
import {Post} from "../model/post";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts!:Post[]
  description!:string;

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.getData()
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
}
