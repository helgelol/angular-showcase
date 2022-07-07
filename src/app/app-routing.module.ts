import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmissionsComponent } from './pages/emissions/emissions.component';
import { WeightComponent } from './pages/weight/weight.component';
import { UserdbComponent } from './pages/userdb/userdb.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

import { AuthGuard } from './services/shared/guard/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: '/sign-in',
    pathMatch: 'full',
  },
  {
    path: 'users',
    component: UserdbComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'emissions',
    component: EmissionsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'weight',
    component: WeightComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
