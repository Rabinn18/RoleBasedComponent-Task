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
    this.service.getbyCode(this.loginForm.value.id).subscribe(res => {
      this.userdata = res;
      if(this.userdata.password === this.loginForm.value.password){
        if(this.userdata.isactive){
          sessionStorage.setItem('id', this.userdata.id);
          sessionStorage.setItem('userrole', this.userdata.role);
          this.router.navigate(['/pages/home']);
          this.toastr.success('Logged in Successfully','Registered Success')
        }else{
          this.toastr.error('Please Contact Admin', "Inactive User")
        }
      }
    },
    (error) => {
      if (error.status === 401) {
        this.toastr.error(
          "Email/Password doesn't match",
          'Invalid Credentials'
        );
      } else if (error.status === 404) {
        this.toastr.error('Unable To Find Email/Password', 'Error'
        );
      } else if (error.status === 400) {
        this.toastr.error('Please fill required fields', 'Error'
        );
      } else {
        this.toastr.error(
          'An error occured, please try agian later.',
          'Error',
        );
      }
    })
  }
}
