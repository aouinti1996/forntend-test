import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ArticleRequest} from "../model/articleRequest";
import {Observable} from "rxjs";
import {Article} from "../model/article";
import {ArticleResponse} from "../model/articleResponse";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private host = environment.apiUrl;
  httpOptions = { headers: new HttpHeaders({
      'Content-Type': 'application/json'})}

  constructor(private http:HttpClient) { }

  public createArticle(articleRequest:ArticleRequest) : Observable<ArticleRequest> {
    return this.http.post<ArticleRequest>(`${this.host}/api/articles`,articleRequest,this.httpOptions)
  }

  public getArticle(articleId:number): Observable<ArticleResponse> {
    return this.http.get<ArticleResponse>(`${this.host}/api/articles/${articleId}`)
  }

  public getAllArticles(): Observable<ArticleResponse[]> {
    return this.http.get<ArticleResponse[]>(`${this.host}/api/articles/`)
  }

  public getArticlesByCategory(categoryId:number):Observable<ArticleResponse[]> {
    return this.http.get<ArticleResponse[]>(`${this.host}/api/articles/by-category/${categoryId}`)
  }

  public getArticlesByUsername(username:string):Observable<ArticleResponse[]> {
    return this.http.get<ArticleResponse[]>(`${this.host}/api/articles/by-category/${username}`)
  }

  public shareArticle(userId:number,articleId:number): Observable<Article> {
    return this.http.post<Article>(`${this.host}/api/articles/share/${userId}/${articleId}`,this.getArticle(articleId),this.httpOptions)
  }
}
