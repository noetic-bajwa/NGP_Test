import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
declare let AOS: any;

// import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  number = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
  isActive=this.number;
  
  
  constructor(private pageTitle:Title) { }
  
  ngOnInit(): void {
    AOS.init();
    this.pageTitle.setTitle('Noetic Gaming Portal | Login');
  }
  

}
