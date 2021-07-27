import { Component, OnInit , AfterViewInit , ElementRef , ViewChild, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceInDown } from 'ng-animate';
import { ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
declare let AOS: any;
declare var $:any;

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

export class SubscriptionComponent implements OnInit  , OnDestroy {
  subject = new Subject();
  @ViewChild('namedElement', {static: false}) namedElement: ElementRef;
   
  
  partner : string;
  trackerId : string;
  subKeyword :string;
  shortCode : string;
  message : string;
  message1 :string ="PKR 10+ tax per day"; 
  message2 :string ="PKR 25+ tax per 3 days"; 
  timeOut : boolean = false;

  bounceInDown: any;
  number = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
  isActive=5; 
  orderby: string;
  
  constructor(private pageTitle:Title,private router: Router,private route: ActivatedRoute) {

    
   }
   
   
   
   ngAfterViewInit() {
    
  }

  ngOnInit(): void {  
    AOS.init();
    this.pageTitle.setTitle('Gamingo | Play');
    
      
      
      this.route.queryParams
      .subscribe(params => {
        if(params.partner != 'pm' || params.partner == 'tct'  ){
          this.partner = 'ntl'
          
        }

        if(params.partner == 'pm' || params.partner == 'tct'   && params.trackerId != ''){
          this.partner = params.partner
          this.trackerId = params.trackerId
          this.subKeyword = this.partner+" "+this.trackerId
        }else{
          this.subKeyword = "ntl"}

        
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
        if( (params.partner == 'pm' || params.partner == 'tct' )  && params.trackerId == ''){
          this.partner = params.partner;
          this.trackerId = ""
          this.subKeyword = this.partner;
        }
        if( (params.partner == 'pm' || params.partner == 'tct')   && params.trackerId == undefined){
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
        
        if(params.partner == 'pm' || params.partner == 'tct'){
          timer(5000).
        pipe(takeUntil(this.subject)).
        subscribe(
          (val) => {
            
            // location.href = "'sms:'+"+this.shortCode+"'?&body=Ngp'+' '"+this.subKeyword;
            this.namedElement.nativeElement.click()
            // document.write("Redirecting ...")
          },
          
          (er) => console.log(er),
          () => console.log("Done")
          
          );

        }
        
      }
    ); 


    
}

ngOnDestroy() {
  this.subject.next();
  this.subject.unsubscribe();
  
}
  
}
