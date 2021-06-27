import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


// import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  
  
  
  constructor(private pageTitle:Title) { }
  
  ngOnInit(): void {
    
    this.pageTitle.setTitle('Noetic Gaming Portal | Login');
  }
  

}
