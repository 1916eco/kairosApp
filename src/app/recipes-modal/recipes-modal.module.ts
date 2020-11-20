import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RecipesModalPageRoutingModule } from './recipes-modal-routing.module';

import { RecipesModalPage } from './recipes-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipesModalPageRoutingModule
  ],
  declarations: [RecipesModalPage]
})
export class RecipesModalPageModule {}
