import { Component} from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {ModalController} from '@ionic/angular';
@Component({
  selector: 'app-ingredients-info-modal',
  templateUrl: './ingredients-info-modal.page.html',
  styleUrls: ['./ingredients-info-modal.page.scss'],
})
export class IngredientsInfoModalPage {
  constructor(private modalController: ModalController) {}
  nameInput2 = new FormControl('',Validators.required)
  ingredientInput2 = new FormControl('',Validators.required)
  myDate2 = '';
  doesExpire= false;
  data;
  
  closeModal(){
    this.modalController.dismiss(null,'cancel')
  }
  display(){
    //console.log(this.indexNumberFrom)
  }
  editIngredent(){
    let myDate: any = new Date(this.myDate2)
    var obj ={
    newIngredientsName: this.nameInput2.value,
    newIngredientsQty: this.ingredientInput2.value,
    newIngredientsExp: this.myDate2,
    indexNumberFrom: this.data.indexNumber
  }
    console.log(obj)
    this.modalController.dismiss(obj,'Done')

  }
}
