import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private afAuth: AngularFireAuth) { }

  /**
   * Will save a secret into localstorage which can be used to detect authentication
   */
  login(afAuth: any) {
    this.afAuth = afAuth
    this.isLoggedIn()
  }
  /**
   * Will delete authentication
   */
  logout() {
    if (!this.afAuth) { this.router.navigate(['']); return }
    this.afAuth.signOut().then(() => {
      this.router.navigate([''])
    })
  }
  /**
   * Check if user is logged in or not
   */
  isLoggedIn() {
    console.log('afauth: ', this.afAuth)
    if (!this.afAuth) {
      this.router.navigate([''])
      return
    }

    let url = location.href.split('/').pop()
    if (this.afAuth.authState) {
      if (!url || url.toLowerCase() == 'signup') {
        this.router.navigate(['/orders'])
      }
    }
    else {
      if (url && url.toLowerCase() != 'signup') {
        this.router.navigate(['/'])
      }
    }
  }
}
