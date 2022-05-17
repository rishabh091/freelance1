import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public showNav: boolean = true

  constructor() { }

  ngOnInit(): void {
    let url = location.href.split('/').pop()
    if (!url || url.toLowerCase() == 'signup') this.showNav = false
    else this.showNav = true
  }

}
