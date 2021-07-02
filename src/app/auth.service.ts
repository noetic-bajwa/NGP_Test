import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

const httpOptions = {
  withCredentials: true,
  headers: new HttpHeaders({
    'Content-Type':  'application/json'  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  id = this.cookieService.get('id');

  constructor(private http: HttpClient,private cookieService:CookieService) { }
  login(msisdn:any){
  // let body=JSON.stringify(msisdn);
  // console.log(msisdn);
  let url=" https://premium.battleground.pk/login/ ";
  return this.http.post(url,msisdn);
  
  }

  logout(){
  // let url="http://localhost:3000/logout";
  // return this.http.get(url,httpOptions);
  this.cookieService.set('token','');
  }
  
  loggedIn(){
    return(this.cookieService.get('token'));   
    
  }
}
