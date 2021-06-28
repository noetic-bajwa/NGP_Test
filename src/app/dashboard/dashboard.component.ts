import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceInDown } from 'ng-animate';
import { AuthenticationGuard } from '.././authentication.guard';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] ,
  animations: [
    trigger('bounceInDown', [transition('* => *', useAnimation(bounceInDown, {
      params: {
        timing: 1,
    
        // Specify granular values for `translate` on axis Y during 'bounceInDown' 
        a: '-3000px',
        b: '25px',
        c: '-10px',
        d: '5px',
      }
    }))])
  ]
})

export class DashboardComponent implements OnInit {
  bounceInDown: any;
  visible=true;

  constructor(private authService:AuthenticationGuard,private router: Router,private cookieService:CookieService) { }
  
  permission = this.authService.canActivate();
  ngOnInit(): void {
    
  setTimeout(()=>{
    if(this.permission == false){
      this.visible = false;  
      // alert('Please Login')
        
    }
    
}, 2000);

// setTimeout(()=>{
//   if(this.permission == false){
//     this.router.navigateByUrl('login');
      
//   }
  
// }, 60000);
  }

  onLogout(){
    this.cookieService.set('jwt','');
    this.router.navigateByUrl('login');
  }

  

}
