import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  submitted = false;
  hide: boolean = true;
  userdata: any;
  constructor(
    private builder: FormBuilder,
    private service: AuthService,
    private router: Router,
    private toastr: ToastrService) {
      sessionStorage.clear();
  }
  loginForm = this.builder.group ({
    id: this.builder.control('', Validators.required),
    password: this.builder.control('',Validators.required)
  })
  ngOnInit(): void {
  }

  onSubmitLogin(){
    // if (this.loginForm.valid) {
    //   this.service.getRegestered(this.loginForm.value).subscribe(result => {
    //     console.log(this.loginForm.value)
    //     this.toastr.success('Please contact admin for enable access.','Registered successfully')
    //     this.router.navigate(['login'])
    //   });
    // } else {
    //   this.toastr.warning('Please enter valid data.')
    // }

    this.service.getbyCode(this.loginForm.value.id).subscribe(res => {
      this.userdata = res;
      // console.log(this.userdata);
      if(this.userdata.password === this.loginForm.value.password){
        if(this.userdata.isactive){
          sessionStorage.setItem('id', this.userdata.id);
          sessionStorage.setItem('userrole', this.userdata.role);
          this.router.navigate(['dashboard']);
        }else{
          this.toastr.error('Please Contact Admin', "Inactive User")
        }
      }else{
        this.toastr.error('Invalid Credential')
      }
    })
  }
}
