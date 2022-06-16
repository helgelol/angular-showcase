import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { EmissionsComponent } from './pages/emissions/emissions.component';
import { WeightComponent } from './pages/weight/weight.component';
import { UserdbComponent } from './pages/userdb/userdb.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { EmissionsCarbonIntensityComponent } from './components/emissions-carbon-intensity/emissions-carbon-intensity.component';
import { FormsModule } from '@angular/forms';
import {
  IgxItemLegendModule,
  IgxLegendModule,
  IgxPieChartModule,
} from 'igniteui-angular-charts';
import { EmissionsChartTestComponent } from './components/emissions-chart-test/emissions-chart-test.component';

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
    EmissionsChartTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxPieChartModule,
    IgxLegendModule,
    IgxItemLegendModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
