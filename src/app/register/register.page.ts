import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, User } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  logo = './../../assets/logo.png';
  registerForm: FormGroup;

  constructor(public router: Router, public authService: AuthService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl('',  Validators.email),
      password: new FormControl('',)
    });
  }

  navigateTo(link: string) {
    this.router.navigate(['/login']);
  }

  sendContactForm() {
    const user: User = {
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value
    };
    this.authService.createUserWithEmailAndPassword(user);
  }
}
