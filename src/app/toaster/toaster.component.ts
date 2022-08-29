import { Component, OnInit } from '@angular/core';
import { ServiceToasterService } from '../service-toaster.service';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {

  constructor(public toasterService: ServiceToasterService) { }

  ngOnInit(): void {
  }

}
