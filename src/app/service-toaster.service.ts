import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceToasterService {

  constructor() { }

  text: string;
  successNote: boolean = false;
  errorNote: boolean = false;
  infoNote: boolean = false;

  success(text: string) {
    this.errorNote = true;
    this.text = text;

    setTimeout(() => {
      this.errorNote = false;
      this.text = '';
    }, 5000);
  }

  failure(text: string) {
    this.errorNote = true;
    this.text = text;

    setTimeout(() => {
      this.errorNote = false;
      this.text = '';
    }, 5000);
  }

  info(text: string) {
    this.infoNote = true;
    this.text = text;

    setTimeout(() => {
      this.infoNote = false;
      this.text = '';
    }, 5000);
  }
}
