import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'http://localhost:3000/api/';
  constructor(private http: HttpClient) {}

  login(userpwd: any) {
    return this.http.post(this.url + 'login', userpwd, httpOptions);
  }
  getUsers() {
    return this.http.get(this.url + 'users', httpOptions);
  }
}
