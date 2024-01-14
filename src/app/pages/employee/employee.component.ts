import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  public loggedInUserRoleData: string|any;
  public loggedInRole = this.service.getUserRole();
  userList: any;
  roleList: any;

  constructor(
    private service: AuthService,
    private toastr: ToastrService
  ){}

  ngOnInit(): void {
    this.loadUser();
    this.service.getAllRoles().subscribe(res=>{
      this.roleList = res;
    })
    this.loggedInUserRoleData = sessionStorage.getItem('role')
  }
  loadUser(){
    this.service.getAll().subscribe(res => {
      this.userList = res;
    });
  }

  approveData(data: any) {
    Swal.fire({
      title: '<h4>Are you sure?</h4>',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DC3545',
      confirmButtonText: 'YES',
      cancelButtonText: 'NO',
      showConfirmButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // Toggle the isActive status
        const newStatus = !data.isactive;

        // Change the status of the user
        this.service.changeStatus(data.id, newStatus).subscribe({
          next: (res: any) => {
            Swal.fire('<h4>Status Changed!</h4>', res.message, 'success');
            // Reload user data after status change
            this.loadUser();
          },
          error: (error: any) => {
            Swal.fire('Error', 'Unable to update status.', 'error');
          }
        });
      }
    });
  }




  openRolePopup(data: any) {
    this.service.getAllRoles().subscribe((roles: any) => {
      if (Array.isArray(roles)) {
        Swal.fire({
          title: 'Assign Role',
          html: `
            <select id="roleDropdown" class="form-control">
              ${roles.map((role: any) => `<option value="${role.code}">${role.name}</option>`).join('')}
            </select>
          `,
          showCancelButton: true,
          confirmButtonText: 'Assign',
          cancelButtonText: 'Cancel',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          preConfirm: () => {
            // Get the selected role from the dropdown
            const selectedRole = (<HTMLSelectElement>document.getElementById('roleDropdown')).value;

            // Update the user with the selected role
            return this.service.assignRole(data.id, selectedRole);
          }
        }).then((result) => {
          if (result.isConfirmed) {
            this.toastr.success('Role assigned successfully');
            this.loadUser();
          }
        });
      } else {
        Swal.fire('Error', 'Unable to fetch roles.', 'error');
      }
    });
  }
}
