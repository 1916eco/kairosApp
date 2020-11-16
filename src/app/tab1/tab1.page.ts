import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {  HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import{Observable} from 'rxjs'
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private nav:NavController) {}
  recipes = []
  recipes2 = []
  listFilter='';
  searched = false

  ngOnInit() {
    //this.mainPage()
  }

  async mainPage(){
    var appId = "66e70773"
    var appKey = "cc03af7094cde3a4ce6cf1b91e277f6c"
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${appId}&app_key=${appKey}`);
    const data = await response.json();
    this.recipes2 = data.hits;
    console.log(data.hits);
  }
  slideOpts = {
    slidesPerView: 2,
    centeredSlides: true,
    loop: true,
    initialSlide: 2,    
    autoplay: true
  };
  clickedSearch(){
    console.log("Clicked Search")
    //this.getRecipes(listFilter)
  }
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

