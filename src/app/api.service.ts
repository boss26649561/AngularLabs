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
  addUser(user: any) {
    return this.http.post(this.url + 'users', user, httpOptions);
  }
  deleteUser(user: any) {
    return this.http.put(this.url + 'users', user, httpOptions);
  }
  getGroup(user: any) {
    return this.http.post(this.url + 'Group', user, httpOptions);
  }
  getGroups() {
    return this.http.get(this.url + 'groups', httpOptions);
  }
  addGroup(group: any) {
    return this.http.post(this.url + 'groups', group, httpOptions);
  }
  deleteGroup(name: any) {
    return this.http.put(this.url + 'groups', name, httpOptions);
  }

  addToGroup(user: any) {
    return this.http.post(this.url + 'userGroup', user, httpOptions);
  }
  deleteFromGroup(user: any) {
    return this.http.put(this.url + 'userGroup', user, httpOptions);
  }
  addChannel(nameID: any) {
    return this.http.post(this.url + 'channels', nameID, httpOptions);
  }
}
