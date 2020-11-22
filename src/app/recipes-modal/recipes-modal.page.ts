import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-recipes-modal',
  templateUrl: './recipes-modal.page.html',
  styleUrls: ['./recipes-modal.page.scss'],
})
export class RecipesModalPage implements OnInit {
  constructor(private modalController: ModalController) { }
  data;

  ngOnInit() {
    console.log(this.data)
  }

}
