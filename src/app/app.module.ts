import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UsersComponent } from './components/users/users.component';
import { DetailsComponent } from './components/details/details.component';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { ContactcardComponent } from './contactcard/contactcard.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent, UsersComponent, DetailsComponent, FrontpageComponent, ContactcardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
