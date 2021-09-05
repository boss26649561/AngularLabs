import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-group-assistant-page',
  templateUrl: './group-assistant-page.component.html',
  styleUrls: ['./group-assistant-page.component.css'],
})
export class GroupAssistantPageComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {
    this.checkSession();
  }
  checkSession() {
    var checkStorage = sessionStorage.getItem('user');
    console.log(checkStorage);
    if (!checkStorage) {
      this.route.navigate(['/']);
    }
  }
}
