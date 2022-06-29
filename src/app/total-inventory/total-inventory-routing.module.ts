import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TotalInventoryPage } from './total-inventory.page';

const routes: Routes = [
  {
    path: '',
    component: TotalInventoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TotalInventoryPageRoutingModule {}
