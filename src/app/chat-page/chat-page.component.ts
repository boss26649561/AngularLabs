import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from '../api.service';
import { SocketService } from '../socket.service';

const BACKEND_URL = 'http://localhost:3000';
@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
})
export class ChatPageComponent implements OnInit {
  messagecontent: string = '';
  messages: string[] = [];
  ioConnection: any;
  users: string[] = [];
  user = localStorage.getItem('user');
  constructor(
    private route: Router,
    private _Activatedroute: ActivatedRoute,

    private apiService: ApiService,
    private socketService: SocketService
  ) {}

  ngOnInit(): void {
    this.checkSession();
    let id = { id: this._Activatedroute.snapshot.paramMap.get('id') };

    this.getChat(id);
    this.initIoConnection();
    this.socketService.userSend(this.user);
  }
  checkSession() {
    var checkStorage = localStorage.getItem('user');
    console.log(checkStorage);
    if (!checkStorage) {
      this.route.navigate(['/']);
    }
  }
  private initIoConnection() {
    this.socketService.initSocket();
    this.ioConnection = this.socketService
      .onMessage()
      .subscribe((message: string) => {
        this.messages.push(message);
      });
    this.ioConnection = this.socketService
      .onUser()
      .subscribe((user: string) => {
        this.users.push(user);
      });
  }
  getChat(id: any) {
    //grab groups
    console.log(id);
    this.apiService.getChat(id).subscribe((data: any) => {
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
      this.socketService.send(this.messagecontent);
      this.messages.push(this.messagecontent);
      let param = {
        id: this._Activatedroute.snapshot.paramMap.get('id'),
        chat: this.messagecontent,
      };
      this.apiService.updateChat(param).subscribe((data: any) => {
        if (data.ok) {
          this.messagecontent = '';
          console.log('posted message');
        }
        if (!data.ok) {
          alert('Error updating Messages');
        }
      });
    } else {
      alert('No message');
      //console.log('no message');
    }
  }
}
