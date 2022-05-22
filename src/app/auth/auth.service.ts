import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private afAuth: any

  constructor(private router: Router) { }

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
