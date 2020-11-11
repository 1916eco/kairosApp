import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {ModalController} from '@ionic/angular';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage  {
  nameInput = new FormControl('',Validators.required)
  ingredientInput = new FormControl('',Validators.required)
  constructor(private modalController: ModalController) { }


  closeModal(){
    this.modalController.dismiss()
  }

  addIngredent(){
    console.log(this.nameInput.value)
    console.log(this.ingredientInput.value)
  }
}
