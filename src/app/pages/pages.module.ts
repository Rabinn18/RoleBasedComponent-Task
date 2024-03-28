import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { HeirarchicalStructureDemoComponent } from './heirarchical-structure-demo/heirarchical-structure-demo.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TreeModule } from 'primeng/tree';
import { TreeSelectModule } from 'primeng/treeselect';

@NgModule({
  declarations: [
    EmployeeComponent,
    HomeComponent,
    HeirarchicalStructureDemoComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatTreeModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatSlideToggleModule,
    TreeModule,
    TreeSelectModule
  ]
})
export class PagesModule { }
