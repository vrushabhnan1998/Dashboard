import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const routes: Routes = [
    {
        path: "dashboard",
        component: DashboardComponent,
    },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
        path: "**",
        redirectTo: 'dashboard'
    },
];


@NgModule({
    exports: [RouterModule],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]

  })
  export class AppRoutingModule {
  }