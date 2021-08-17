import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor(private route: Router) {}

  ngOnInit(): void {}

  accountCheck() {
    if (
      (this.username == 'test1' && this.password == '123') ||
      (this.username == 'test2' && this.password == '123') ||
      (this.username == 'test3' && this.password == '123')
    ) {
      alert('success ');
      this.route.navigate(['/account']);
    } else alert('User name and password do not match');
  }
}
