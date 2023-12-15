import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalizarcompraPageRoutingModule } from './finalizarcompra-routing.module';

import { FinalizarcompraPage } from './finalizarcompra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalizarcompraPageRoutingModule
  ],
  declarations: [FinalizarcompraPage]
})
export class FinalizarcompraPageModule {}
