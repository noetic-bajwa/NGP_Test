import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceInDown } from 'ng-animate';
import { ActivatedRoute } from '@angular/router';
declare let AOS: any;

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'] ,
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
export class SubscriptionComponent implements OnInit {
  partner : string;
  trackerId : string;
  subKeyword :string;
  shortCode : string;

  bounceInDown: any;
  number = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
  isActive=5; 
  orderby: string;
  constructor(private pageTitle:Title,private router: Router,private route: ActivatedRoute) {
    // this.router.navigate(['/subscribe'], { queryParams: { 'partner': '', 'trackerId': '' } });
    
    // location.href = "sms:3444?&body=PLAY%20GAME";
    // location.href = "sms://+919999999999?body=Hello%20World!"
    // ? -android
    // & - ios
    
    
   }
   
  ngOnInit(): void {  
    
    AOS.init();
    this.pageTitle.setTitle('Gamingo | Play');
    // setTimeout(()=>{
      
      
      this.route.queryParams
      .subscribe(params => {
        console.log(params); // { orderby: "price" }
        // this.partner = (params.partner)
        // this.trackerId = (params.trackerId)
        if(params.partner != ''  && params.trackerId != ''){
          this.partner = params.partner
          this.trackerId = params.trackerId
          this.subKeyword = this.partner+" "+this.trackerId
        }
        if(params.partner == ''  && params.trackerId== ''){
          this.partner = "ntl"
          this.trackerId = ""
          this.subKeyword = this.partner;
        }
        if(params.partner == undefined  || params.trackerId== undefined){
          this.partner = "ntl"
          this.trackerId = ""
          this.subKeyword = this.partner;
        }
        if(params.partner == ''  && params.trackerId != ''){
          this.partner = "ntc"
          this.trackerId = ""
          this.subKeyword = this.partner;
        }
        if(params.partner != ''  && params.trackerId == ''){
          this.partner = params.partner;
          this.trackerId = ""
          this.subKeyword = this.partner;
        }
        if(params.se == undefined){
          this.shortCode = '3444'
        }
        if(params.se == ''){
          this.shortCode = '3444'
        }
        if(params.se == '1'){
          this.shortCode = '3444'
        }
        if(params.se == '2'){
          this.shortCode = '3445'
        }
        console.log(this.subKeyword);
        
        // this.orderby = params.orderby;
        // console.log(this.orderby); // price
      }
    );     
      
      
    // }, 3000);
  }
  
}
