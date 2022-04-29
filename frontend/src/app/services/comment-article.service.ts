import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CommentArticleDto} from "../model/comment-article-dto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentArticleService {
  private host = environment.apiUrl;
  httpOptions = { headers: new HttpHeaders({
      'Content-Type': 'application/json'})}

  constructor(private http:HttpClient) { }

  public createComment(comment:CommentArticleDto): Observable<CommentArticleDto> {
    return this.http.post<CommentArticleDto>(`${this.host}/api/commentArticle`,comment,this.httpOptions)
  }

  public getCommentsByArticle(articleId: number): Observable<CommentArticleDto[]> {
    return this.http.get<CommentArticleDto[]>(`${this.host}/api/commentArticle/by-post/${articleId}`)
  }

  public getCommentsByUsername(username: string): Observable<CommentArticleDto[]> {
    return this.http.get<CommentArticleDto[]>(`${this.host}/api/commentArticle/by-user/${username}`)
  }
}
