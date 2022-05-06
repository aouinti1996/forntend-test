import {Component, Input, OnInit} from '@angular/core';
import {CommentPostService} from "../../services/comment-post.service";
import {CommentPost} from "../../model/comment-post";

@Component({
  selector: 'app-comment-container',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.component.css']
})
export class CommentContainerComponent implements OnInit {

  @Input() postId!: number
  comments:CommentPost[] = []


  constructor(private commentPostService: CommentPostService) { }

  ngOnInit(): void {
    this.getPostComments(this.postId)
  }

  getPostComments(idPost:number) {
    this.commentPostService.getCommentsByPostId(idPost).subscribe( (res: CommentPost[]) =>
      this.comments = res
    )
  }

  deleteCommentPost(commentId: number) {
    this.commentPostService.deleteComment(commentId).subscribe()
    window.location.reload()
  }
}
