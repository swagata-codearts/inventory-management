import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TotalInventoryPageRoutingModule } from './total-inventory-routing.module';

import { TotalInventoryPage } from './total-inventory.page';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TotalInventoryPageRoutingModule
  ],
  declarations: [
    TotalInventoryPage,
    FooterComponent
  ]
})
export class TotalInventoryPageModule {}
