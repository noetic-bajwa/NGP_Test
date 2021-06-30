import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/auth.service';
import { NgForm } from '@angular/forms';
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
  
  
  errorObj:any={
    email:'',
    password:''
  };
  
  constructor(private pageTitle:Title,private dataService:AuthService) { }
  
  ngOnInit(): void {
    AOS.init();
    this.pageTitle.setTitle('Noetic Gaming Portal | Login');
  }
  
  

  onSubmit(form:NgForm){
    console.log(form.value)
    alert("clicked")
    // this.dataService.login(this.body).subscribe(
    //   data => {
        
    //     },
    //     err => {
    //       this.errorObj = err.error;
    //       setTimeout(() => {
    //         this.errorObj = "";
    //       }, 3000);
    //     } 
    // )
  }
}
