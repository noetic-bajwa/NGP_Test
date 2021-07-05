import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceInDown } from 'ng-animate';
import {CookieService} from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';
declare let AOS: any;

// import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] ,
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


export class LoginComponent implements OnInit {
  bounceInDown: any;
  number = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
  isActive=5; 
  name:number;
  token:any;
  
  
  errorObj:any={};
  
  constructor(private pageTitle:Title,private dataService:AuthService,private router: Router,private cookieService:CookieService,private route: ActivatedRoute) { }
  
  msisdn:string;
  ngOnInit(): void {
    AOS.init();
    this.route.queryParams
      .subscribe(params => {

        this.msisdn = (params.msisdn)
        console.log(this.msisdn);
        
      });
    
  
  }
  
  

  onSubmit(form:NgForm){
    
    form.value.msisdn = form.value.msisdn.toString();
    form.value.msisdn = form.value.msisdn.padStart(11, '0'); 
    console.log(form.value)
    this.dataService.login(form.value).subscribe(
      data => {
        console.log(data)
        this.token = data;
        // console.log(this.token.token)
        this.cookieService.set('token',this.token.token);
        this.router.navigate(['']);  
        },
        err => {
          
          this.errorObj  = err.error

          setTimeout(() => {
            this.errorObj = "";
            // form.reset();
          }, 3000);
          
        } 
    )
  }
}
