import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngredientsInfoModalPage } from './ingredients-info-modal.page';

const routes: Routes = [
  {
    path: '',
    component: IngredientsInfoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngredientsInfoModalPageRoutingModule {}
