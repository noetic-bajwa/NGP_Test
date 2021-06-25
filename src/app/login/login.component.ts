import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private pageTitle:Title) { }
  number = 2;
  ngOnInit(): void {
    this.pageTitle.setTitle('Noetic Gaming Portal | Login');
  }

}
