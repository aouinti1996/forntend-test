import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {CommentPost} from "../model/comment-post";

@Injectable({
  providedIn: 'root'
})
export class CommentPostService {
  private host = environment.apiUrl;
  httpOptions = { headers: new HttpHeaders({
      'Content-Type': 'application/json'})}

  constructor(private http:HttpClient) { }

  public createCommentPost(postId:number,content:string): Observable<CommentPost> {
    return this.http.post<CommentPost>(`${this.host}/api/commentPost/${postId}`,content,this.httpOptions)
  }

  public updateComment(comment:CommentPost): Observable<CommentPost> {
    return this.http.put<CommentPost>(`${this.host}/api/commentPost/`,comment,this.httpOptions)
  }

  public getAllComments(): Observable<CommentPost[]> {
    return this.http.get<CommentPost[]>(`${this.host}/api/commentPost`)
  }

  public getCommentById(commentId:number): Observable<CommentPost> {
    return this.http.get<CommentPost>(`${this.host}/api/commentPost/${commentId}`)
  }

  public deleteComment(commentId:number): Observable<CommentPost> {
    return this.http.delete<CommentPost>(`${this.host}/api/commentPost/${commentId}`)
  }

  public getCommentsByPostId(postId:number): Observable<CommentPost[]> {
    return this.http.get<CommentPost[]>(`${this.host}/api/commentPost/byPostId/${postId}`)
  }
}
