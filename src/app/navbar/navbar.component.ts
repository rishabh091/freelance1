import { AfterContentChecked, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterContentChecked {

  public showNav: boolean = true

  constructor(public auth: AuthService) { }
  ngAfterContentChecked(): void {
    const urls = location.href.split('/')
    const url = urls.pop()

    if (!url || url.toLowerCase() == 'signup' || urls.includes('signup')) this.showNav = false
    else this.showNav = true
  }

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout()
  }

}
