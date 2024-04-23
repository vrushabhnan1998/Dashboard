import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '',   redirectTo: 'dashboard', pathMatch: 'full' }, 
    {
        path:"dashboard",
        component:DashboardComponent,
    },
    {
        path:"**",
        redirectTo: 'dashboard'
    },
];

@NgModule({
    exports: [RouterModule],
  })
  export class AppRoutingModule {
  }