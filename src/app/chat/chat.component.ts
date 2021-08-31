import { Component, OnInit } from '@angular/core';
import { SocketService } from '../services/socket.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  messagecontent: string = '';
  messages: string[] = [];
  ioConnection: any;
  constructor(private socketService: SocketService) {}

  ngOnInit(): void {
    this.initIoConnection();
  }
  private initIoConnection() {
    this.socketService.initSocket();
    this.ioConnection = this.socketService
      .onMessage()
      .subscribe((message: string) => {
        this.messages.push(message);
      });
  }

  chat() {
    if (this.messagecontent) {
      this.socketService.send(this.messagecontent);
      this.messagecontent = '';
    } else {
      console.log('no message');
    }
  }
  // chat(msg: string) {
  //   this.messages.push(msg);
  // }
}
