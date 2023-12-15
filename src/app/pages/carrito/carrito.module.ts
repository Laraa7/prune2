import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CarritoPageRoutingModule } from './carrito-routing.module';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
import { CarritoPage } from './carrito.page';
import { ContadorCantidadComponent } from 'src/app/core/components/contador-cantidad/contador-cantidad.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarritoPageRoutingModule,
    ContadorCantidadComponent,
    ExploreContainerComponentModule
  ],
  declarations: [CarritoPage]
})
export class CarritoPageModule {}
