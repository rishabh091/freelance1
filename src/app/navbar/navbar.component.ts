import { AfterContentChecked, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterContentChecked {

  public showNav: boolean = true

  constructor(private auth: AuthService) { }
  ngAfterContentChecked(): void {
    let url = location.href.split('/').pop()
    if (!url || url.toLowerCase() == 'signup') this.showNav = false
    else this.showNav = true
  }

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout()
  }

}
