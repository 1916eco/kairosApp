import { Component,ViewChild} from '@angular/core';
import {IonSearchbar, ModalController} from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { IngredientsInfoModalPage } from '../ingredients-info-modal/ingredients-info-modal.page';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  @ViewChild('ingredientsSearch', { static: false }) search: IonSearchbar;
  
  //public ingredients: Array<Object> = [];
  public searchedItem: any;
  i = 0
  constructor(private modalController: ModalController) {
    this.searchedItem = this.ingredients;
  }
  ingredients = [
    {
      name: "Pepper",
      qty: 99,
      expire:"never"
    },
    {
      name: "Salt",
      qty: 99,
      expire:"never"
    },    
    {
      name: "Carrots",
      qty: 15,
      expire:"never"
    },    
    {
      name: "Onions",
      qty: 11,
      expire:"never"
    },    
    {
      name: "Eggs",
      qty: 17,
      expire:"never"
    },
    {
      name: "Avocados",
      qty: 5,
      expire:"never"
    },
    {
      name: "Corn",
      qty: 2,
      expire:"never"
    },
    {
      name: "Chicken",
      qty: 12,
      expire:"never"
    },
    {
      name: "Pasta",
      qty: 20,
      expire:"2020-12-16T01:21:38.128-00:00"
    },
  ];
  clickedSearch(){
    console.log("Clicked Search")
  }

  //searchbar functionality 
  ionViewDidEnter() {
    setTimeout(() => {
      this.search.setFocus();
    });
  }

  //searchbar functionality 
  _ionChange(event) {
    
    const val = event.target.value;

    this.searchedItem = this.ingredients;
    if (val && val.trim() != '') {
      this.searchedItem = this.searchedItem.filter((item: any) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  //removing the ingredients from the list
  removeIngredient(id){
    const index = this.ingredients.findIndex(inn => inn.name === id);    
    this.ingredients.splice(index,1);
    this.search.value='';
  }

//Modal opener
  async openModal(){
      const modal = await this.modalController.create({
        component: ModalPage,
        swipeToClose: true,
        // componentProps:{name: ingredient.name, balance: ingredient.qty}
      });
      await modal.present()

      await modal.onWillDismiss().then((data) =>{
        //const ingredient = new ingredients(data.newIngredientsName,data.newIngredientsQty);
        var newObje = { name : data.data.newIngredientsName, qty : data.data.newIngredientsQty, expire : data.data.newIngredientsExp}
        this.ingredients.push(newObje)
        console.log(data.data.newIngredientsName)
      });
    }

    async updateIngredient(id){
      const index = this.ingredients.findIndex(inn => inn.name === id);    
      
      const modal = await this.modalController.create({
        component: IngredientsInfoModalPage,
        swipeToClose: true,
        componentProps: {data:this.ingredients[index]}
        // componentProps:{name: ingredient.name, balance: ingredient.qty}
      });
      await modal.present()

      await modal.onWillDismiss().then((data) =>{
        //const ingredient = new ingredients(data.newIngredientsName,data.newIngredientsQty);
        var newObject = { name : data.data.newIngredientsName, qty : data.data.newIngredientsQty, expire : data.data.newIngredientsExp}
        
        this.ingredients[index] = newObject
        console.log(data.data)
      });
    }
}
