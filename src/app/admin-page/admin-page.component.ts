import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
const BACKEND_URL = 'http://localhost:3000';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
})
export class AdminPageComponent implements OnInit {
  username = localStorage.getItem('user');
  newUser = { username: '', email: '', password: '' };
  deleteUser = { username: '' };
  currentUsers = null;
  constructor(private route: Router, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.checkSession();
    this.getUsers();
  }

  checkSession() {
    var checkStorage = localStorage.getItem('user');
    console.log(checkStorage);
    if (!checkStorage) {
      this.route.navigate(['/']);
    }
  }
  getUsers() {
    this.httpClient
      .get(BACKEND_URL + '/api/getUsers', httpOptions)
      .subscribe((data: any) => {
        if (data.ok) {
          this.currentUsers = data.Users;
          console.log(this.currentUsers);
        }
        if (!data.ok) {
          alert('Error retrieving Users');
        }
      });
  }
  createUser() {
    if (
      this.newUser.username != '' &&
      this.newUser.email != '' &&
      this.newUser.password != ''
    ) {
      this.httpClient
        .post(BACKEND_URL + '/api/createUser', this.newUser, httpOptions)
        .subscribe((data: any) => {
          //alert(JSON.stringify(this.userpwd));
          if (data.ok) {
            alert('User successfully created');
          }
          if (!data.ok) {
            alert('User already exists, please try another username');
          }
        });
    } else {
      alert('Still missing details');
    }
  }
  //
  removeUser() {
    this.httpClient
      .put(BACKEND_URL + '/api/deleteUser', this.deleteUser)
      .subscribe((data: any) => {
        //alert(JSON.stringify(this.userpwd));
        if (data.ok) {
          alert(this.deleteUser.username + 'successfully deleted');
        }
        if (!data.ok) {
          alert('Username not found');
        }
      });
  }
}
