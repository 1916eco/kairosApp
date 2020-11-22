import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import {  HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import{Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import { RecipesModalPage } from '../recipes-modal/recipes-modal.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private nav:NavController,private modalController: ModalController) {}
  recipes = []
  recipes2 = []
  recipes3 = []
  listFilter='';
  searched = false

  ngOnInit() {
    this.mainPage()
    this.getApi()
  }

  async getApi(){
    var appId = "66e70773"
    var appKey = "cc03af7094cde3a4ce6cf1b91e277f6c"
    const response = await fetch(`https://api.edamam.com/search?q=eggs&app_id=${appId}&app_key=${appKey}`);
    const data = await response.json();
    this.recipes3 = data.hits;
    console.log(data.hits);
  }

  async openRecipeModal(id){
    const index = this.recipes.findIndex(rec => rec.recipe.label === id);

    const recipeModal = await this.modalController.create({
      component: RecipesModalPage,
      swipeToClose: true,
      componentProps: {data:this.recipes[index]}
    });
    console.log(this.recipes[index])
    await recipeModal.present()
  }

  async openRecipeModal2(id){
    const index = this.recipes2.findIndex(rec => rec.recipe.label === id);

    const recipeModal = await this.modalController.create({
      component: RecipesModalPage,
      swipeToClose: true,
      componentProps: {data:this.recipes2[index]}
    });
    console.log(this.recipes2[index])
    await recipeModal.present()
  }

  async openRecipeModal3(id){
    const index = this.recipes3.findIndex(rec => rec.recipe.label === id);

    const recipeModal = await this.modalController.create({
      component: RecipesModalPage,
      swipeToClose: true,
      componentProps: {data:this.recipes3[index]}
    });
    await recipeModal.present()
  }

  async mainPage(){
    var appId = "66e70773"
    var appKey = "cc03af7094cde3a4ce6cf1b91e277f6c"
    const response = await fetch(`https://api.edamam.com/search?q=Soup&app_id=${appId}&app_key=${appKey}`);
    const data = await response.json();
    this.recipes2 = data.hits;
    console.log(data.hits);
  }
  slideOpts = {
    slidesPerView: 2,
    centeredSlides: true,
    loopedSlides: 10,
    loop: true,
    initialSlide: 2,
    loopAdditionalSlides:0
  };

  pushPage(){
    this.nav.navigateForward('/tab3.page')
  }
  async searchingRecipe(listFilter) {
    this.searched = true
    var appId = "66e70773"
    var appKey = "cc03af7094cde3a4ce6cf1b91e277f6c"
    const response = await fetch(`https://api.edamam.com/search?q=${listFilter}&app_id=${appId}&app_key=${appKey}`);
    const data = await response.json();
    this.recipes = data.hits;
    console.log(data.hits);
    
  }
}