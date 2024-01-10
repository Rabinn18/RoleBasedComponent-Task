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

const Modules = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  HttpClientModule,
  ToastrModule.forRoot()
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
