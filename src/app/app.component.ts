import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'week5';
  deleteSession() {
    sessionStorage.clear();
    alert('Logged out');
  }
}
