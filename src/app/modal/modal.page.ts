import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {ModalController} from '@ionic/angular';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage  {
  constructor(private modalController: ModalController) {}
  nameInput = new FormControl('',Validators.required)
  ingredientInput = new FormControl('',Validators.required)
  myDate = '';
  doesExpire= false;


  closeModal(){
    this.modalController.dismiss(null,'cancel')
  }

  addIngredent(){
    let myDate: any = new Date(this.myDate)
    var obj ={
    newIngredientsName: this.nameInput.value,
    newIngredientsQty: this.ingredientInput.value,
    newIngredientsExp: this.myDate
  }
    console.log(obj)
    this.modalController.dismiss(obj,'Done')

  }
}
