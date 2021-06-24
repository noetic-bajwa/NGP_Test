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
    location.href = "sms:3444?body=CHECK-MY-BODY 99";
   }

  ngOnInit(): void {
    
    this.pageTitle.setTitle('Noetic Gaming Portal | Subscribe');
  }

}
