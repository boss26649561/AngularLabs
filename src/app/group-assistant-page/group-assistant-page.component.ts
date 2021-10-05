import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../api.service';
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
  constructor(
    private route: Router,
    private httpClient: HttpClient,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.checkSession();
    this.checkGroup();
    this.getUsers();
  }

  getUsers() {
    this.apiService.getUsers().subscribe((data: any) => {
      if (data.ok) {
        this.currentUsers = data.Users;
        //console.log(this.currentUsers);
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
    //console.log(this.addgroup);
    this.apiService.addToGroup(this.addgroup).subscribe((data: any) => {
      //alert(JSON.stringify(this.userpwd));
      if (data.ok) {
        alert(user + ' added to ' + group);
      } else {
        alert(user + ' is already in the group');
      }
    });
  }

  checkGroup() {
    //grab groups
    this.apiService.getGroup(this.username).subscribe((data: any) => {
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
    this.apiService.addChannel(gname).subscribe((data: any) => {
      if (data.ok) {
        alert('Channel has been added');
      } else {
        alert('Error adding channel');
      }
    });
  }
  deleteUserGroup() {
    //console.log(this.deleteUser);
    this.apiService.deleteFromGroup(this.deleteUser).subscribe((data: any) => {
      //alert(JSON.stringify(this.userpwd));
      if (data.ok) {
        alert(this.deleteUser.user + 'deleted from' + this.deleteUser.group);
      } else {
        alert('Error occured');
      }
    });
  }
}
