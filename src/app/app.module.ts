import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './MyComponent/home/home.component';
import { BookComponent } from './MyComponent/book/book.component';
import { VerifyComponent } from './MyComponent/verify/verify.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ShowTicketComponent } from './MyComponent/show-ticket/show-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    VerifyComponent,
    ShowTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
