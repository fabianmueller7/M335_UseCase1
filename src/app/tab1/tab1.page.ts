import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  articles: any = [
    {title:'Scooter', img: './../../assets/scooter.jpg'},
    {title:'Handy', img: './../../assets/Handy.jpg'},
    {title:'Handy', img: './../../assets/Handy.jpg'},
    {title:'Handy', img: './../../assets/Handy.jpg'},
    {title:'Handy', img: './../../assets/Handy.jpg'},
    {title:'Mouse', img: './../../assets/mouse.png'}
    ];

  constructor(public router: Router) {}

  navigateTo(link: string) {
    this.router.navigate(['/tabs']);
  }

}
