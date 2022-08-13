import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RegisterModule } from 'src/app/modules/auth-module.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  register(payload: RegisterModule) {
    let url = environment.apiUrl + 'register'
    return this.httpClient.post(url, payload).toPromise()
  }
}