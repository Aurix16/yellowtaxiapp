import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mobile = '';
  password = '';
  constructor(private nav: NavController, private auth: AuthService) {
    let info = this.auth.getUserInfo();
    this.mobile = info.mobile;
    this.password = info.password;
  }
 
  public logout() {
    this.auth.logout().subscribe(succ => {
        this.nav.setRoot(LoginPage)
    });
  }
}
