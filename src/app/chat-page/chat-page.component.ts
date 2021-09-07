import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
const BACKEND_URL = 'http://localhost:3000';
@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
})
export class ChatPageComponent implements OnInit {
  messagecontent: string = '';
  messages: string[] = [];
  constructor(
    private route: Router,
    private _Activatedroute: ActivatedRoute,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.checkSession();
    let id = { id: this._Activatedroute.snapshot.paramMap.get('id') };
    this.getChat(id);
  }
  checkSession() {
    var checkStorage = localStorage.getItem('user');
    console.log(checkStorage);
    if (!checkStorage) {
      this.route.navigate(['/']);
    }
  }
  getChat(id: any) {
    //grab groups
    this.httpClient
      .post(BACKEND_URL + '/api/getChat', id, httpOptions)
      .subscribe((data: any) => {
        if (data.ok) {
          this.messages = data.chat;
          console.log(this.messages);
        }
        if (!data.ok) {
          alert('Error retrieving Messages');
        }
      });
  }
  chat() {
    if (this.messagecontent) {
      this.messages.push(this.messagecontent);
      this.messagecontent = '';
      //need to post data back
      let param = {
        id: this._Activatedroute.snapshot.paramMap.get('id'),
        chat: this.messages,
      };
      this.httpClient
        .post(BACKEND_URL + '/api/updateChat', param, httpOptions)
        .subscribe((data: any) => {
          if (data.ok) {
            console.log('posted message');
          }
          if (!data.ok) {
            alert('Error updating Messages');
          }
        });
    } else {
      console.log('no message');
    }
  }
}
