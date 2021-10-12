import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

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
  groups = null;
  addgroup = { group: '', user: '' };
  newGroup = { name: '' };
  deleteUserGroup = { group: '', user: '' };

  delGroup = { name: '' };
  currentid: number = 0;
  constructor(
    private route: Router,

    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.checkSession();
    this.getGroup();
    this.getUsers();
  }
  getGroup() {
    this.apiService.getGroups().subscribe((data: any) => {
      if (data.ok) {
        this.groups = data.Groups;
        this.currentid = data.id;
        console.log(this.groups);
        console.log(this.currentid);
      }
      if (!data.ok) {
        alert('Error retrieving Groups');
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
  createUser() {
    if (
      this.newUser.username != '' &&
      this.newUser.email != '' &&
      this.newUser.password != ''
    ) {
      this.apiService.addUser(this.newUser).subscribe((data: any) => {
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
  createGroup() {
    this.apiService.addGroup(this.newGroup).subscribe((data: any) => {
      if (data.ok) {
        alert('new group ' + this.newGroup.name + ' has been added');
      }
      if (!data.ok) {
        alert('Error retrieving Groups');
      }
    });
  }
  deleteGroup(name: string) {
    this.delGroup.name = name;
    this.apiService.deleteGroup(this.delGroup).subscribe((data: any) => {
      if (data.ok) {
        alert('Group has been deleted');
        this.currentid += 1;
      } else {
        alert('Error removing group');
      }
    });
  }
  deleteUserFromGroup() {
    //console.log(this.deleteUser);
    this.apiService
      .deleteFromGroup(this.deleteUserGroup)
      .subscribe((data: any) => {
        //alert(JSON.stringify(this.userpwd));
        if (data.ok) {
          alert(
            this.deleteUserGroup.user +
              'deleted from' +
              this.deleteUserGroup.group
          );
        } else {
          alert('Error occured');
        }
      });
  }
  //
  removeUser() {
    //console.log(this.deleteUser);
    this.apiService.deleteUser(this.deleteUser).subscribe((data: any) => {
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
