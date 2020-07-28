import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as M from 'materialize-css/js/sidenav';

declare const M: any;
// declare var fillSidenav:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  options = { edge: screenLeft };
  constructor() {}

  ngOnInit() {
    // ERROR
    // Error: Cannot read property 'clientWidth' of undefined
    // let elems = document.querySelectorAll('.carousel');
    // let instances = M.Carousel.init(elems, this.options);
  }
  ngAfterViewInit() {
    // no errors
    setTimeout(function () {
      var elem = document.querySelector('.sidenav');
      var instance = M.Sidenav.init(elem, this.options);
    }, 0);
  }
}
