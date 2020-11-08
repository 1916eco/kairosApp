import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  slideOpts = {
    slidesPerView: 2,
    centeredSlides: true,
    loop: true,
  };
}
