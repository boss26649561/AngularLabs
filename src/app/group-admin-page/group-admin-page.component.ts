import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
const BACKEND_URL = 'http://localhost:3000';
@Component({
  selector: 'app-group-admin-page',
  templateUrl: './group-admin-page.component.html',
  styleUrls: ['./group-admin-page.component.css'],
})
export class GroupAdminPageComponent implements OnInit {
  username = localStorage.getItem('user');
  newUser = { username: '', email: '', password: '' };
  currentUsers = null;
  groups = null;
  addgroup = { group: '', user: '' };
  deleteUser = { group: '', user: '' };
  constructor(private route: Router, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.checkSession();
    this.getGroup();
    this.getUsers();
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
  checkSession() {
    var checkStorage = localStorage.getItem('user');
    console.log(checkStorage);
    if (!checkStorage) {
      this.route.navigate(['/']);
    }
  }
  getGroup() {
    this.httpClient
      .get(BACKEND_URL + '/api/getAllGroups', httpOptions)
      .subscribe((data: any) => {
        if (data.ok) {
          this.groups = data.Groups;
          console.log(this.groups);
        }
        if (!data.ok) {
          alert('Error retrieving Groups');
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
  addUserToGroup(group: string, user: string) {
    console.log(this.addgroup);
    this.httpClient
      .put(BACKEND_URL + '/api/addToGroup', this.addgroup, httpOptions)
      .subscribe((data: any) => {
        //alert(JSON.stringify(this.userpwd));
        if (data.ok) {
          alert(user + 'added to' + group);
        } else {
          alert('Error occured');
        }
      });
  }
  DeleteUserGroup() {
    //   console.log(this.deleteUser);
    //   this.httpClient
    //     .put(BACKEND_URL + '/api/addToGroup', this.addgroup, httpOptions)
    //     .subscribe((data: any) => {
    //       //alert(JSON.stringify(this.userpwd));
    //       if (data.ok) {
    //         alert(user + 'added to' + group);
    //       } else {
    //         alert('Error occured');
    //       }
    //     });
  }
}
