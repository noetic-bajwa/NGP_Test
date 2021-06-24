import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  constructor(private pageTitle:Title) { }

  ngOnInit(): void {
    this.pageTitle.setTitle('Noetic Gaming Portal | Subscribe');
  }

}
