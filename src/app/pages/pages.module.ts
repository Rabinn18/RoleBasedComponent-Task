import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
