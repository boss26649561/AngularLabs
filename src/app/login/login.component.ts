import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
const BACKEND_URL = 'http://localhost:3000';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userpwd = { username: '', pwd: '' };
  userobj = { user: '', birthdate: null, age: ' ' };
  constructor(private route: Router, private httpClient: HttpClient) {}

  ngOnInit(): void {}
  loginfunc() {
    this.httpClient
      .post(BACKEND_URL + '/api/login', this.userpwd, httpOptions)
      .subscribe((data: any) => {
        //alert(JSON.stringify(this.userpwd));
        if (data.ok) {
          // console.log(data);
          // console.log(data.user.username);
          sessionStorage.setItem('user', data.user.username);
          sessionStorage.setItem('birthdate', data.user.birthdate);
          sessionStorage.setItem('age', data.user.age);
          //alert(data);
          alert('success ');
          this.route.navigate(['/account']);
        } else {
          alert('User and password not found in database');
        }
      });
  }
}
