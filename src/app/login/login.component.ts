import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userpwd = { username: '', pwd: '' };
  userobj = { user: '', birthdate: null, age: ' ' };
  
  constructor(private route: Router, private apiService: ApiService) {}

  ngOnInit(): void {}

  loginfunc() {
    //this.httpClient.get(BACKEND_URL + '/api/database', httpOptions);
    this.apiService.login(this.userpwd).subscribe((data: any) => {
      //alert(JSON.stringify(this.userpwd));
      if (data.ok) {
        // console.log(data);
        // console.log(data.user.username);
        localStorage.setItem('user', data.user.username);
        localStorage.setItem('role', data.user.role);

        //alert(data);
        if (data.user.role == 'User') {
          //sessionStorage.setItem('channel', data.user.channel);
          alert('Success, Welcome Normal user ');
          this.route.navigate(['/account1']);
        }
        if (data.user.role == 'Group Assistant') {
          alert('Success, Welcome Group Assistant ');
          this.route.navigate(['/account4']);
        }
        if (data.user.role == 'Group Admin') {
          alert('Success, Welcome GroupAdmin');
          this.route.navigate(['/account3']);
        }
        if (data.user.role == 'Super Admin') {
          alert('Success, Welcome Super Admin');
          this.route.navigate(['/account2']);
        }
      } else {
        alert('User and password not found in database');
      }
    });
  }
}
