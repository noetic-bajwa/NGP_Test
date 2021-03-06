import { Component, OnInit , AfterViewInit , ElementRef , ViewChild, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import { timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'] 
})

export class SubscriptionComponent implements OnInit  , OnDestroy {
  subject = new Subject();
  @ViewChild('namedElement', {static: false}) namedElement: ElementRef;
   
  
  partner : string;
  trackerId : string;
  subKeyword :string;
  shortCode : string;
  pub : string;
  sub : string;
  message : string;
  message1 :string ="PKR 10+ tax per day"; 
  message2 :string ="PKR 25+ tax per 3 days"; 
  

  bounceInDown: any;
  
  constructor(private pageTitle:Title,private router: Router,private route: ActivatedRoute, private cookieService:CookieService) {
    
    
   }
   isAffiliate = this.cookieService.get('isAffiliate');

  ngOnInit(): void {  
    this.pageTitle.setTitle('Gamingo | Play');
    
      this.route.queryParams
      .subscribe(params => {
        if(params.partner != 'pm' || params.partner == 'tct'  ){
          this.partner = 'ntl'
          
        }

        if(params.sub == '' || params.sub == undefined)
        {
          this.sub=''
        }

        if(params.pub == '' || params.pub == undefined)
        {
          this.pub=''
        }

        if((params.partner == 'pm' || params.partner == 'tct' || params.partner == 'kk' || params.partner == 'yh')  && params.trackerId != '' && params.pub != '' && params.sub != '' ){
          this.cookieService.set('isAffiliate','true');
          this.partner = params.partner;
          this.trackerId = params.trackerId;
          this.pub = params.pub;
          this.sub = params.sub;
          this.subKeyword = this.partner+" "+this.trackerId+" "+this.pub+" "+this.sub;
        }else{
          this.subKeyword = "ntl"
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
          this.partner = "ntl"
          this.trackerId = ""
          this.subKeyword = this.partner;
        }
        if( (params.partner == 'pm' || params.partner == 'tct' || params.partner == 'kk' || params.partner == 'yh') && params.trackerId == ''){
          this.cookieService.set('isAffiliate','true');
          this.partner = params.partner;
          this.trackerId = ""
          this.subKeyword = this.partner;
        }
        if( (params.partner == 'pm' || params.partner == 'tct' || params.partner == 'kk' || params.partner == 'yh') && params.trackerId == undefined){
          this.cookieService.set('isAffiliate','true');
          this.partner = params.partner;
          this.trackerId = ""
          this.subKeyword = this.partner;
        }
        if(params.sc == undefined){
          this.shortCode = '3444';
          this.message = this.message1;
        }
        if(params.sc == ''){
          this.shortCode = '3444';
          this.message = this.message1;
        }
        if(params.sc == '1'){
          this.shortCode = '3444';
          this.message = this.message1;
        }
        if(params.sc == '2'){
          this.shortCode = '3445';
          this.message = this.message2;
        }
        
        if( (params.partner == 'pm' || params.partner == 'tct' || params.partner == 'kk' || params.partner == 'yh') ) {
          timer(1).
        pipe(takeUntil(this.subject)).
        subscribe(
          (val) => {
            // location.href = "'sms:'+"+this.shortCode+"'?&body=Ngp'+' '"+this.subKeyword;
            this.namedElement.nativeElement.click();
            // console.log(this.subKeyword);
            // console.log(this.shortCode)
            // this.cookieService.set('isAffiliate','');
            // document.write("Redirecting ...");
          },        
          (er) => console.log(er),
          () => console.log("")
        
          );
        }              
      }
    ); 
}

ngOnDestroy() {
  // this.subject.next();
  // this.subject.unsubscribe();
} 
}
