import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SocketService } from './services/socket.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [AppComponent, ChatComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CommonModule],
  providers: [SocketService],
  bootstrap: [AppComponent],
})
export class AppModule {}
