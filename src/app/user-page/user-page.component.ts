import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
const BACKEND_URL = 'http://localhost:3000';
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  username = { username: localStorage.getItem('user') };
  groups = null;

  constructor(
    private route: Router,
    private httpClient: HttpClient,
  ) {}

  ngOnInit(): void {
    this.checkSession();
    this.checkGroup();
  }
  checkSession() {
    var checkStorage = localStorage.getItem('user');

    console.log(checkStorage);
    if (!checkStorage) {
      this.route.navigate(['/']);
    }
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
}
