import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css'],
})
export class ZonesComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  addZone()
  {
    this.zone.push(this.zone.length+1)
  }
  zone = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

}
