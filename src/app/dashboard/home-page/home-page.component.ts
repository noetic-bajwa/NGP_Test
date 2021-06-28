import { Component, OnInit } from '@angular/core';
import { AuthenticationGuard } from 'src/app/authentication.guard';
import { GAMES } from '../../data';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'] 
})
export class HomePageComponent implements OnInit {
  
  Games = GAMES;
  playmsg:any="";
  visibility=true;
  
  constructor(private authService:AuthenticationGuard , private dataService:AuthService , private router: Router , private cookieService:CookieService) { 
    
  }
  permission = this.authService.canActivate();
  ngOnInit(): void {
    
    if(this.permission == true){
      this.playmsg = "Let's Play";
    }else{
      this.playmsg = "Login to Play";
    }
  }


  onClick(ref:any){
    // this.cookieService.set('title',title)
    // alert(ref);
    this.dataService.id = ref;
    // this.dataService.src = ref.href;
    // this.dataService.description = desc.innerHTML;
    // this.dataService.instruction = inst.innerHTML;
    this.router.navigateByUrl('game');
    // alert(inst.innerHTML);

  }

}
