import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  username = sessionStorage.getItem('user');
  birthdate = sessionStorage.getItem('birthdate');
  age = sessionStorage.getItem('age');

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.checkSession();
  }
  checkSession() {
    var checkStorage = sessionStorage.getItem('user');
    console.log(checkStorage);
    if (!checkStorage) {
      this.route.navigate(['/login']);
    }
  }
}
