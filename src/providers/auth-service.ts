import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

export class User{
    mobile:string;
    password:string;
    
    constructor(mobile:string, password: string){
        this.mobile = mobile;
        this.password = password;
    }
}


@Injectable()
export class AuthService {
    currentUser: User;
    
    public login(credentials){
        if (credentials.mobile === null || credentials.password === null){
            return Observable.throw("Please insert credentials");
        }else{
            return Observable.create(observer=>{
                //make a request to the backend here.
                let access = (credentials.password === "pass" && credentials.mobile ==="mobile");
                this.currentUser = new User('Aurora', 'aurora@strawb3rry.com');
                observer.next(access);
                observer.complete();
            });
        }
        
    }
    
    public register(credentials){
        if (credentials.mobile === null || credentials.password === null){
            return Observable.throw("Please insert credentials");
        }else{
            //store to your back end!
            return Observable.create(observer=> {
                observer.next(true);
                observer.complete();
            });
        }
    }
    
    public getUserInfo() : User{
        return this.currentUser;
    }
    
    public logout(){
        return Observable.create(observer=>{
            this.currentUser = null;
            observer.next(true);
            observer.complete();
        });
    }
    
    
//    constructor(public http: Http) {
//    console.log('Hello AuthService Provider');
//    }

}
