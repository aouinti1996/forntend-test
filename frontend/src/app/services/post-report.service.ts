import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {PostReport} from "../model/post-report";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostReportService {
  private host = environment.apiUrl;
  httpOptions = { headers: new HttpHeaders({
      'Content-Type': 'application/json'})}

  constructor(private http: HttpClient) { }

  public reportPost(report:PostReport): Observable<PostReport> {
    return this.http.post<PostReport>(`${this.host}/api/reportPost`,report,this.httpOptions)
  }

  public updateReport(report:PostReport): Observable<PostReport> {
    return this.http.put<PostReport>(`${this.host}/api/reportPost`,report,this.httpOptions)
  }

  public getReportsByUsername(username:string): Observable<PostReport[]> {
    return this.http.get<PostReport[]>(`${this.host}/api/reportPost/${username}`)
  }

  public deleteReport(reportId:number): Observable<PostReport> {
    return this.http.delete<PostReport>(`${this.host}/api/reportPost/${reportId}`)
  }

}
