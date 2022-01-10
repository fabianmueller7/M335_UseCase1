import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  async loginWithEmailAndPassword(user: User) {
    return this.afAuth.signInWithEmailAndPassword(user.email, user.password)
    .then((result) => {
      this.router.navigate(['/tabs']);
    }).catch((error) => {
      window.alert(error.message);
    });
  }

  async createUserWithEmailAndPassword(user: User) {
   return this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
    .then((result) => {
      window.alert('You have been successfully registered!');
      console.log(result.user);
    }).catch((error) => {
      window.alert(error.message);
    });
  }

  logout() {
    this.afAuth.signOut()
    .then((result) => {
      this.router.navigate(['/login']);
      console.log('logged out');
    }).catch((error) => {
      window.alert(error.message);
    });
  }

  resetpassword(email: string){
    this.afAuth.sendPasswordResetEmail(email)
    .then((result) => {
      this.router.navigate(['/login']);
      console.log('email send');
    }).catch((error) => {
      window.alert(error.message);
    });
  }
}

export interface User {
  email: string;
  password: string;
}
