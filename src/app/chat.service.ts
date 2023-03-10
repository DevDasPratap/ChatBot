import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }
  getChat(message: string): Observable<{ message: string }> {
    return this.http.post < {message: string} > ('http://157.245.160.26:4002', {message})
  }
}
