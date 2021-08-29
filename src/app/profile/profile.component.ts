import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  username = sessionStorage.getItem('user');
  birthdate = sessionStorage.getItem('birthdate');
  age = sessionStorage.getItem('age');

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.checkSession();
  }
  checkSession() {
    var checkStorage = sessionStorage.getItem('user');
    if (!checkStorage) {
      this.route.navigate(['/login']);
    }
  }
  saveSession() {
    sessionStorage.setItem('user', this.username as string);
    sessionStorage.setItem('birthdate', this.birthdate as string);
    sessionStorage.setItem('age', this.age as string);
    alert('Details saved');
  }
}
