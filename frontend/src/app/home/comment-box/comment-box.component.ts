import {Component, Input, OnInit} from '@angular/core';
import {CommentPostService} from "../../services/comment-post.service";

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent implements OnInit {
  content!: string;
  @Input() postId!:number

  constructor(private commentPostService: CommentPostService) { }

  ngOnInit(): void {
  }

  postComment(postId:number,content:string) {
    this.commentPostService.createCommentPost(postId,content).subscribe()
    window.location.reload()
  }
}
