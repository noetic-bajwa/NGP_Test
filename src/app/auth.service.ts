import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  title = this.cookieService.get('title');
  src = this.cookieService.get('src');
  description = this.cookieService.get('description');
  instruction = this.cookieService.get('instruction');
  
  

  constructor(private cookieService:CookieService) { }

  
  loggedIn(){
    return(this.cookieService.get('jwt')=='Pakistan');  
    
  }
}
