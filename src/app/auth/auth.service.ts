import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signOut } from "firebase/auth";
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private afAuth: AngularFireAuth) { }

  /**
   * Will save a secret into localstorage which can be used to detect authentication
   */
  login() {
    const authPromise = this.afAuth.authState.pipe(first()).toPromise()
    authPromise.then(user => {
      user.getIdToken(true).then(token => { localStorage.setItem('token', token) })
      this.router.navigate(['/orders'])
    })
  }
  /**
   * Will delete authentication
   */
  logout() {
    if (!this.afAuth) { this.router.navigate(['']); return }
    const auth = getAuth()
    signOut(auth).then(() => {
      localStorage.clear()
      if (!this.isLoggedIn()) this.router.navigate([""])
    })
    .catch(err => { console.log(err) })
  }
  /**
   * Check if user is logged in or not
   */
  isLoggedIn() {
    const token = localStorage.getItem('token')
    const storeId = localStorage.getItem('storeId')
    return token && storeId
  }
}
