import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  username = sessionStorage.getItem('user');
  group = sessionStorage.getItem('channel');

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.checkSession();
    this.checkGroup();
  }
  checkSession() {
    var checkStorage = sessionStorage.getItem('user');

    console.log(checkStorage);
    if (!checkStorage) {
      this.route.navigate(['/']);
    }
  }
  checkGroup() {}
}
