import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceInDown } from 'ng-animate';
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
  
  
  errorObj:any={};
  
  constructor(private pageTitle:Title,private dataService:AuthService,private router: Router) { }
  
  ngOnInit(): void {
    AOS.init();
    this.pageTitle.setTitle('Noetic Gaming Portal | Login');
    
  }
  
  

  onSubmit(form:NgForm){
    
    form.value.msisdn = form.value.msisdn.toString();
    form.value.msisdn = form.value.msisdn.padStart(11, '0'); 
    console.log(form.value)
    this.dataService.login(form.value).subscribe(
      data => {
        console.log(data)
        // this.router.navigate(['/studentDashboard']);  
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
