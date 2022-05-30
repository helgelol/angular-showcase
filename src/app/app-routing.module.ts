import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { DetailsComponent } from './components/details/details.component';
import { FrontpageComponent } from './components/frontpage/frontpage.component';

const routes: Routes = [
  {
    path: '',
    component: FrontpageComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
