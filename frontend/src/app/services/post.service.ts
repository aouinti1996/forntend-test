import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Post} from "../model/post";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private host = environment.apiUrl;
  httpOptions = { headers: new HttpHeaders({
      'Content-Type': 'application/json'})}

  constructor(private http:HttpClient) { }

  public createPost(post:Post) : Observable<Post> {
    return this.http.post<Post>(`${this.host}/api/posts/add`,post,this.httpOptions)
  }

  public getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.host}/api/posts`)
  }

  public getPost(postId:number): Observable<Post> {
    return this.http.get<Post>(`${this.host}/api/posts/${postId}`)
  }

  public getPostsByUsername(username:string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.host}/api/posts/by-user/${username}`)
  }

  public likePost(postId:number) : Observable<Post> {
    return this.http.post<Post>(`${this.host}/api/posts/add-like`,this.getPost(postId),this.httpOptions)
  }

  public dislikePost(postId:number) : Observable<Post> {
    return this.http.post<Post>(`${this.host}/api/posts/add-dislike`,this.getPost(postId),this.httpOptions)
  }

  public removeLike(postId:number) : Observable<Post> {
    return this.http.post<Post>(`${this.host}/api/posts/remove-like`,this.getPost(postId),this.httpOptions)
  }

  public removeDislike(postId:number) : Observable<Post> {
    return this.http.post<Post>(`${this.host}/api/posts/remove-like`,this.getPost(postId),this.httpOptions)
  }

  public sharePost(userId:number,postId:number): Observable<Post> {
    return this.http.post<Post>(`${this.host}/api/posts/share/${userId}/${postId}`,this.getPost(postId),this.httpOptions)
  }
}
