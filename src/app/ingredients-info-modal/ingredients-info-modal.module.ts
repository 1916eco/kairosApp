import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngredientsInfoModalPageRoutingModule } from './ingredients-info-modal-routing.module';

import { IngredientsInfoModalPage } from './ingredients-info-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    IngredientsInfoModalPageRoutingModule
  ],
  declarations: [IngredientsInfoModalPage]
})
export class IngredientsInfoModalPageModule {}
