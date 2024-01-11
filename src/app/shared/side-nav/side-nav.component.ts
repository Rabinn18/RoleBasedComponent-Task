import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements DoCheck, OnInit{
  public isadmin = false;
  public activeSegment: string = "";
  public loggedInRole = this.service.getUserRole();
  public LoggedInUserName: string|any;
  public menuItemsList: Array<any> = [];
  constructor(
    private service:AuthService,
  ){
      // console.log(this.loggedInRole)
  }
  public home = [
    {
      title: 'Home',
      icon: 'fa fa-dashboard',
      link: '/pages/home',
    }
  ]
    public employee = [
    {
      title: 'Employee',
      icon: 'fa fa-bullhorn',
      link: '/pages/employee',
    },
  ]
  ngDoCheck(): void {
    if(this.service.getUserRole()==='admin'){
      this.isadmin=true;
    }else{
      this.isadmin=false;
    }
  }
  ngOnInit(): void{
    this.LoggedInUserName = sessionStorage.getItem('id')
    if(this.service.getUserRole()==='admin'){
      this.menuItemsList.push(...this.home, ...this.employee)
    }else if(this.service.getUserRole()==='manager'){
      this.menuItemsList.push(...this.home, ...this.employee)
    }else{
      this.menuItemsList.push(...this.home)
    }
  }
}
