import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  options = { fullWidth: false };

  hrefs = ['one', 'two', 'three', 'four', 'five'];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // ERROR
    // Error: Cannot read property 'clientWidth' of undefined
    // let elems = document.querySelectorAll('.carousel');
    // let instances = M.Carousel.init(elems, this.options);
  }
}
