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
  username = sessionStorage.getItem('user');
  newUser = { username: '', email: '', password: '' };
  deleteUser = { username: '' };
  constructor(private route: Router, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.checkSession();
  }
  checkSession() {
    var checkStorage = sessionStorage.getItem('user');
    console.log(checkStorage);
    if (!checkStorage) {
      this.route.navigate(['/']);
    }
  }
  //
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
