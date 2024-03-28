import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../guard/auth.guard';
import { HeirarchicalStructureDemoComponent } from './heirarchical-structure-demo/heirarchical-structure-demo.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'hierarchical-demo',
    component: HeirarchicalStructureDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
