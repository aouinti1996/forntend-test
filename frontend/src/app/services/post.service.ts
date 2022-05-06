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

  public createPost(post:string, file : File) : Observable<Post> {
    const data : FormData = new FormData();
    data.append('post', post);
    data.append('file', file);
    return this.http.post<Post>(`${this.host}/api/posts/add`,data)
  }

  public getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.host}/api/posts/list`)
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

  public deletePost(postId: number): Observable<Post> {
    return this.http.delete<Post>(`${this.host}/api/posts/delete/${postId}`)
  }
}
