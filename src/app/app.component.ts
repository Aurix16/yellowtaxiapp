import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';
import { AuthService } from '../providers/auth-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public alertCtrl: AlertController, public auth: AuthService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Your Trips', component: HomePage },
      { title: 'Feedback', component: ContactPage },
      { title: 'Sign out', component: AboutPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
   
   logout(){
       let alert = this.alertCtrl.create({
           title: 'Confirm Log Out',
           message: 'Are you sure you want to log out',
           buttons: [
               {
                   text:'Cancel',
                   role:'cancel',
                   handler: () => {
                       console.log('Cancel Clicked');
                   }
               },
               {
                   text: 'Log Out',
                   handler: () =>{
                   this.auth.logout().subscribe(succ => {
                   this.nav.setRoot(LoginPage);
    });
                   }
               }
           ]
       });
       alert.present();
   }

}


