import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { JSON_serverAPIs } from '../api.constants';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(JSON_serverAPIs.userUrl);
  }

  getbyCode(code: any){
    return this.http.get(JSON_serverAPIs.userUrl+'/'+code);
  }

  getRegestered(inputdata : any){
    return this.http.post(JSON_serverAPIs.userUrl, inputdata);
  }

  updateUser(code:any , inputdata: any){
    return this.http.put(JSON_serverAPIs.userUrl + '/' + code, inputdata);
  }

  isLoggedin(){
    return sessionStorage.getItem('id')!=null;
  }

  getUserName(){
    return sessionStorage.getItem('id')!=null?sessionStorage.getItem('id')?.toString():'';
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
    return this.http.patch(`${JSON_serverAPIs.userUrl}/${userId}`, user);
  }
  changeStatus(id: string, newStatus: boolean): Observable<any> {
    // Use PATCH method to update the 'isactive' property of a user
    const user = { isactive: newStatus };
    return this.http.patch(`${JSON_serverAPIs.userUrl}/${id}`, user);
  }
}
