import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private route: Router) {}

  title = 'Assignment1';
  deleteSession() {
    localStorage.clear();
    alert('Logged out');
  }
}
