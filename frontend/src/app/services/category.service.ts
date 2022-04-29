import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CategoryDto} from "../model/category-dto";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private host = environment.apiUrl;
  httpOptions = { headers: new HttpHeaders({
      'Content-Type': 'application/json'})}

  constructor(private http:HttpClient) { }

  public createCategory(category:CategoryDto): Observable<CategoryDto> {
    return this.http.post<CategoryDto>(`${this.host}/api/categories`,category,this.httpOptions)
  }

  public getAllCategories(): Observable<CategoryDto[]> {
    return this.http.get<CategoryDto[]>(`${this.host}/api/categories`)
  }

  public getCategory(categoryId:number): Observable<CategoryDto> {
    return this.http.get<CategoryDto>(`${this.host}/api/categories/${categoryId}`)
  }
}
