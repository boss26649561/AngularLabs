import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdAddComponent } from './prod-add/prod-add.component';
import { ProdEditComponent } from './prod-edit/prod-edit.component';
import { ProdGetComponent } from './prod-get/prod-get.component';
import { ProdServiceService } from './prod-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ProdAddComponent,
    ProdEditComponent,
    ProdGetComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
