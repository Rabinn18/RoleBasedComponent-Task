import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MatTreeModule } from '@angular/material/tree';
import { TreeModule } from 'primeng/tree';
import { TreeSelectModule } from 'primeng/treeselect';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const Modules = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  ToastrModule.forRoot({
    timeOut: 3000,
    positionClass: 'toast-top-right',
    progressBar: true,
  }),
  ReactiveFormsModule,
  HttpClientModule,
  MatTreeModule,
  TreeModule,
  TreeSelectModule
]

const AddModules = [
  PagesModule,
  SharedModule,
  AuthModule
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ ...Modules, ...AddModules ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export interface TreeNode {
  label: string;
  children?: TreeNode[];
}

// Example data
export const TREE_DATA: TreeNode[] = [
  {
    label: 'Node 1',
    children: [
      { label: 'Node 1.1' },
      { label: 'Node 1.2' }
    ]
  },
  {
    label: 'Node 2',
    children: [
      { label: 'Node 2.1' },
      { label: 'Node 2.2' }
    ]
  }
];

