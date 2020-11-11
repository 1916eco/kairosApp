import { Component } from '@angular/core';
import {ModalController} from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  i = 0
  ingredients = [
    {
      name: "Pepper",
      qty: 99
    },
    {
      name: "Salt",
      qty: 99
    }
  ];


  removeIngredient(id){
    const index = this.ingredients.findIndex(ingredient => ingredient.name === id);
    
    this.ingredients.splice(index,1);
  }

  constructor(private modalController: ModalController) {}

  async openModal(){
      const modal = await this.modalController.create({
        component: ModalPage,
        swipeToClose: true,
        // componentProps:{name: ingredient.name, balance: ingredient.qty}
      });
      await modal.present()

      await modal.onWillDismiss().then((data) =>{
        //const ingredient = new ingredients(data.newIngredientsName,data.newIngredientsQty);
        var newObje = { name : data.data.newIngredientsName, qty : data.data.newIngredientsQty}
        this.ingredients.push(newObje)
        console.log(data.data.newIngredientsName)
      });
    }
}
