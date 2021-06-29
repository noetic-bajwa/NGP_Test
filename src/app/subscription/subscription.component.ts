import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
declare let AOS: any;

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  number = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
  isActive=5; 
  constructor(private pageTitle:Title,private router: Router) {
    
    // location.href = "sms:3444?&body=PLAY%20GAME";
    // location.href = "sms://+919999999999?body=Hello%20World!"
    // ? -android
    // & - ios
    
    
   }

  ngOnInit(): void {
    AOS.init();
    this.pageTitle.setTitle('Noetic Gaming Portal | Play');
    // setTimeout(()=>{
      
      
          
      
      
    // }, 3000);
  }
  
}
