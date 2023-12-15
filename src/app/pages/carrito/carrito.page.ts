import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/core/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage {

  constructor(public carritoService: CarritoService) { }

  cambiarCantidad(cantidad:number, idProducto:number){
    console.log(cantidad,idProducto)
    this.carritoService.modificarCantidadProducto(idProducto,cantidad);
  }

}
