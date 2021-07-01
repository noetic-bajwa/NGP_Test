import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomePageComponent } from './dashboard/home-page/home-page.component';
import { AuthenticationGuard } from './authentication.guard'
import { ContactUsComponent } from './dashboard/contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { GameComponent } from './dashboard/game/game.component';
import { SubscriptionComponent } from './subscription/subscription.component';

const routes: Routes = [
  // { 
  //   path:'',redirectTo:'home',pathMatch:'full'
  // },
  { 
    path:'login',component:LoginComponent
  },
  { 
    path:'subscribe',
    component:SubscriptionComponent
  },
  {
    path:'',component:DashboardComponent ,children:[
      // {path:'home', canActivate:[AuthenticationGuard],component:HomePageComponent},
      {path:'',component:HomePageComponent},
      {path:'game',component:GameComponent}

      
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
