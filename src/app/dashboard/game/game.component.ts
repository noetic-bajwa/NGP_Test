import { Component, OnInit , Input ,OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import {CookieService} from 'ngx-cookie-service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AuthenticationGuard } from 'src/app/authentication.guard';
import { Title } from '@angular/platform-browser';
import { GAMES } from '../../data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  id = this.DataService.id;
  Games = GAMES[this.id];
  SimilarGames = GAMES;
  title = this.Games['title'];
  description = this.Games['description'];
  instructions = this.Games['instructions'];
  src = this.Games['iframeSrc'];
  
  urlSafe: any;
  constructor(private authService:AuthenticationGuard,private DataService:AuthService,private cookieService:CookieService , public sanitizer: DomSanitizer,private pageTitle:Title,private router: Router) {
    
   }
   allow:boolean=false;
   permission = this.authService.canActivate();



  
  
  
  
  ngOnInit(): void {
    // console.log(this.Games);
    this.pageTitle.setTitle('Noetic Gaming Portal | '+this.id);
    // this.title = this.DataService.title;
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.src);
    this.cookieService.set('id',this.id);
    


    if(this.permission == true){
      this.allow = true;
    }else{
      this.allow = false;
    }
    
  }

  
  
  onClick(){
    if(this.permission == false){
      alert('Please Login')
    }
  }
  
  // onClick2(ref:any){
  //   this.DataService.id = ref;
  //   this.cookieService.set('id',ref);
  //   this.id = ref;
  //   this.router.navigateByUrl('game');

  // }

  

  
  
}
