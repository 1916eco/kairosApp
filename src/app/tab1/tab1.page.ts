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
  recipes = []
  constructor(private nav:NavController) {}


  slideOpts = {
    slidesPerView: 2,
    centeredSlides: true,
    loop: true,
  };
  clickedSearch(){
    console.log("Clicked Search")
    this.getRecipes()
  }
  pushPage(){
    this.nav.navigateForward('/tab3.page')
  }
  async getRecipes() {
    var appId = "66e70773"
    var appKey = "cc03af7094cde3a4ce6cf1b91e277f6c"
    // return this.http.get(`https://api.edamam.com/search?q=chicken&app_id=${appId}&app_key=${appKey}`)
    // .pipe(
    //   map(results => results['Search'])
    // );
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${appId}&app_key=${appKey}`);
    const data = await response.json();
    this.recipes = data.hits;
    console.log(data.hits);
    
  }
}

