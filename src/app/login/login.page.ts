import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  logo = './../../assets/logo.png';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(link: string) {
    this.router.navigate(['/tabs']);
  }

}
