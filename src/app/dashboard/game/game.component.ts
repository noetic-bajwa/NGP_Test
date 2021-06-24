import { Component, OnInit , Input ,OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import {CookieService} from 'ngx-cookie-service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AuthenticationGuard } from 'src/app/authentication.guard';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit ,OnDestroy{
  urlSafe: any;
  constructor(private authService:AuthenticationGuard,private DataService:AuthService,private cookieService:CookieService , public sanitizer: DomSanitizer,private pageTitle:Title) {
    
   }
   allow:boolean=false;
   permission = this.authService.canActivate();



  
  title = this.DataService.title;
  src = this.DataService.src;
  description = this.DataService.description;
  instruction = this.DataService.instruction;
  
  ngOnInit(): void {
    this.pageTitle.setTitle('Noetic Gaming Portal | '+this.title);
    // this.title = this.DataService.title;
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.src);
    this.cookieService.set('title',this.title);
    this.cookieService.set('src',this.src);
    this.cookieService.set('description',this.description);
    this.cookieService.set('instruction',this.instruction);


    if(this.permission == true){
      this.allow = true;
    }else{
      this.allow = false;
    }
    
  }

  ngDoCheck() {
    // ...
  }
  // @Input() title: string = "";
  ngOnDestroy() {
    console.log("DESTROYED");
    // this.cookieService.set('title','')
  }

  onClick(){
    if(this.permission == false){
      alert('Please Login')
    }
  }

  

  onKeyup(event:any){
    alert("help");
  }
  
}
