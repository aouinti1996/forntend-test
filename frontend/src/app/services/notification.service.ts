import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Notification} from "../model/notification";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private host = environment.apiUrl;
  httpOptions = { headers: new HttpHeaders({
      'Content-Type': 'application/json'})}

  constructor(private http:HttpClient) { }

  public getAllNotifications(): Observable<Notification> {
    return this.http.get<Notification>(`${this.host}/api/notifications`)
  }

  public getNotification(notificationId:number): Observable<Notification> {
    return this.http.get<Notification>(`${this.host}/api/notifications/${notificationId}`)
  }
}
