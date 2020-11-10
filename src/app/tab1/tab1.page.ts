import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private nav:NavController) {}

  slideOpts = {
    slidesPerView: 2,
    centeredSlides: true,
    loop: true,
  };
  pushPage(){
    this.nav.navigateForward('/tab3.page')
  }
}
