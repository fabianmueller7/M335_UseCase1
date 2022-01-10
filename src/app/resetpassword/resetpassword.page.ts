import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {

  logo = './../../assets/logo.png';

  constructor(public router: Router) { }

  ngOnInit() {
  }

  navigateTo(link: string) {
    this.router.navigate(['/login']);
  }
}
