import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { JSON_serverAPIs } from '../api.constants';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  apiurl = 'http://localhost:3000/users'

  getAll(){
    return this.http.get(JSON_serverAPIs.userUrl);
  }

  getbyCode(code: any){
    return this.http.get(JSON_serverAPIs.roleUrl+'/'+code);
  }

  getRegestered(inputdata : any){
    return this.http.post(JSON_serverAPIs.roleUrl, inputdata);
  }

  updateUser(code:any , inputdata: any){
    return this.http.put(JSON_serverAPIs.roleUrl + '/' + code, inputdata);
  }

  isLoggedin(){
    return sessionStorage.getItem('username')!=null;
  }

  getUserRole(){
    return sessionStorage.getItem('userrole')!=null?sessionStorage.getItem('userrole')?.toString():'';
  }

  getAllRoles(){
    return this.http.get(JSON_serverAPIs.roleUrl)
  }
  assignRole(userId: string, roleId: string): Observable<any> {
    // Assign role to a user
    const user = { role: roleId };
    return this.http.patch(`${this.apiurl}/${userId}`, user);
  }
  changeStatus(id: string, newStatus: boolean): Observable<any> {
    // Use PATCH method to update the 'isactive' property of a user
    const user = { isactive: newStatus };
    return this.http.patch(`${this.apiurl}/${id}`, user);
  }
}
