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
  async login() {
    const currentUser = getAuth().currentUser
    if (currentUser) {
      const token = await currentUser.getIdToken(true);
      localStorage.setItem('token', JSON.stringify({token, expiry: new Date().getTime() + 600000}));
      return token;
    }
    return null
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
    // const token = localStorage.getItem('token')
    const storeId = localStorage.getItem('storeId')
    return storeId
  }

  isTokenValid() {
    const tokenObject = JSON.parse(localStorage.getItem('token'))
    const currentTimestamp = new Date().getTime()
    const expiryTimestamp = tokenObject.expiry

    if (currentTimestamp > expiryTimestamp) {
      this.login().then((token) => {
        console.log({token})
      })
    }
  }

  checkPrivilage() {
    return localStorage.getItem('privilege').toLowerCase() == 'true'
  }
}
