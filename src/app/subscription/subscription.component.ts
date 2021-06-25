import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  constructor(private pageTitle:Title,private router: Router) {
    location.href = "sms:3444?&body=PLAY%20GAME";
    // location.href = "sms://+919999999999?body=Hello%20World!"
    // ? -android
    // & - ios
    
    
   }

  ngOnInit(): void {
    
    this.pageTitle.setTitle('Noetic Gaming Portal | Subscribe');
    // setTimeout(()=>{
      
      
          
      
      
    // }, 3000);
  }
  
}
