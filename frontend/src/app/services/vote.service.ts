import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {VoteDto} from "../model/voteDto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  private host = environment.apiUrl;
  httpOptions = { headers: new HttpHeaders({
      'Content-Type': 'application/json'})}

  constructor(private http:HttpClient) { }

  public vote(vote:VoteDto): Observable<VoteDto> {
    return this.http.post<VoteDto>(`${this.host}/api/votes`,vote,this.httpOptions)
  }
}
