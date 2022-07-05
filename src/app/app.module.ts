import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AgChartsAngularModule } from 'ag-charts-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { EmissionsComponent } from './pages/emissions/emissions.component';
import { WeightComponent } from './pages/weight/weight.component';
import { UserdbComponent } from './pages/userdb/userdb.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { EmissionsCarbonIntensityComponent } from './components/emissions-carbon-intensity/emissions-carbon-intensity.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    EmissionsComponent,
    WeightComponent,
    UserdbComponent,
    ContactsComponent,
    EmissionsCarbonIntensityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AgChartsAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
