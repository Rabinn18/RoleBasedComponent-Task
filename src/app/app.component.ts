import { Component, DoCheck } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{
  // title = 'imsTask';
  public isadmin = false;
  constructor(private service:AuthService){

  }
  ngDoCheck(): void {
    if(this.service.getUserRole()==='admin'){
      this.isadmin=true;
    }else{
      this.isadmin=false;
    }
  }
}
