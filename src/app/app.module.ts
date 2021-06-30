import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './dashboard/home-page/home-page.component';
import { ContactUsComponent } from './dashboard/contact-us/contact-us.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { LoginComponent } from './login/login.component';
import { GameComponent } from './dashboard/game/game.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomePageComponent,
    ContactUsComponent,
    LoginComponent,
    GameComponent,
    SubscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxStarRatingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
