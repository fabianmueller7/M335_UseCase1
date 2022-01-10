import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {

  logo = './../../assets/logo.png';
  resetpasswordForm: FormGroup;

  constructor(public router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.resetpasswordForm = new FormGroup({
      email: new FormControl('',  Validators.email),
    });
  }

  sendContactForm() {
    this.authService.resetpassword(this.resetpasswordForm.get('email').value);
  }
}
