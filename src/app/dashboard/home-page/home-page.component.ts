import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { jello } from 'ng-animate';
import { AuthenticationGuard } from 'src/app/authentication.guard';
import { GAMES } from '../../data';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'] ,
  animations: [
    trigger('jello', [transition('* => *', useAnimation(jello))])
  ]
})
export class HomePageComponent implements OnInit {
  
  Games = GAMES;

  jello: any;
  playmsg:any="";
  visibility=true;
  
  constructor(private authService:AuthenticationGuard , private dataService:AuthService , private router: Router , private cookieService:CookieService) { }
  permission = this.authService.canActivate();
  ngOnInit(): void {
  }
  onMouseOver(game:any,image:any){
    game.hidden = false;
    if(this.permission == true){
      game.innerHTML =  "Let's Play"
      image.src = "https://img.icons8.com/metro/40/000000/play.png"
     
    }
    else{
      game.innerHTML = "Login To Play"
      image.src = "https://img.icons8.com/android/40/000000/lock.png"
    }
    
    
    
   
    
  }
  onMouseOut(game:any,image:any){
    game.innerHTML = ""
    image.src = ""
    this.visibility=true;
    game.hidden = true;
     
  }

  onClick(ref:any,desc:any,inst:any){
    // this.cookieService.set('title',title)
    this.dataService.title = ref.innerHTML;
    this.dataService.src = ref.href;
    this.dataService.description = desc.innerHTML;
    this.dataService.instruction = inst.innerHTML;
    this.router.navigateByUrl('game');
    // alert(inst.innerHTML);

  }

}
