import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { MsalGuard } from '@azure/msal-angular/msal.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [MsalGuard]
    },
    {
    path: '',
    component: HomeComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    initialNavigation: 'enabledNonBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
