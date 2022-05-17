import { AfterContentChecked, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterContentChecked {

  public showNav: boolean = true

  constructor() { }
  ngAfterContentChecked(): void {
    let url = location.href.split('/').pop()
    if (!url || url.toLowerCase() == 'signup') this.showNav = false
    else this.showNav = true
  }

  ngOnInit(): void {
  }

}
