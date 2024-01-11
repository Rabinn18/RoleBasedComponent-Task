import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const COMPONENTS = [
  LoginComponent,
  RegisterComponent
];

const MODULES = [
  BrowserAnimationsModule,
  CommonModule,
  RouterModule,
  HttpClientModule,
  ToastrModule.forRoot({
    timeOut: 3000,
    progressBar: true,
  }),
  ReactiveFormsModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
})
export class AuthModule {}
