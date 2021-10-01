import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
const BACKEND_URL = 'http://localhost:3000';
@Component({
  selector: 'app-group-assistant-page',
  templateUrl: './group-assistant-page.component.html',
  styleUrls: ['./group-assistant-page.component.css'],
})
export class GroupAssistantPageComponent implements OnInit {
  username = { username: localStorage.getItem('user') };
  groups = null;
  currentid: number = 0;
  deleteUser = { group: '', user: '' };
  addgroup = { group: '', user: '' };
  currentUsers = null;
  constructor(private route: Router, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.checkSession();
    this.checkGroup();
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
  checkGroup() {
    //grab groups
    this.httpClient
      .post(BACKEND_URL + '/api/getGroups', this.username, httpOptions)
      .subscribe((data: any) => {
        if (data.ok) {
          this.groups = data.Groups;
        }
        if (!data.ok) {
          alert('Error retrieving Groups');
        }
      });
  }
  addChannel(name: string) {
    this.currentid += 1;
    let gname = { name: name, id: this.currentid };
    this.httpClient
      .put(BACKEND_URL + '/api/addChannel', gname, httpOptions)
      .subscribe((data: any) => {
        if (data.ok) {
          alert('Channel has been added');
          this.currentid += 1;
        } else {
          alert('Error adding channel');
        }
      });
  }
  deleteUserGroup() {
    //console.log(this.deleteUser);
    this.httpClient
      .put(BACKEND_URL + '/api/deleteUserGroup', this.deleteUser, httpOptions)
      .subscribe((data: any) => {
        //alert(JSON.stringify(this.userpwd));
        if (data.ok) {
          alert(this.deleteUser.user + 'deleted from' + this.deleteUser.group);
        } else {
          alert('Error occured');
        }
      });
  }
}
