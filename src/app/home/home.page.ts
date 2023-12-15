import { Component, OnInit } from '@angular/core';
import { Categoria } from '../core/interfaces/categorias';
import { CATEGORIAS } from '../core/constants/categorias';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
 
})
export class HomePage {
  constructor(private menuCtrl: MenuController) {}

  categorias: Categoria[]=CATEGORIAS;

  botonPresionado: boolean = false;

  presionarBoton() {
    // Lógica adicional si es necesario
    this.botonPresionado = true;
  }

 

  abrirMenuI(){
    console.log("izquierda")
    this.menuCtrl.open('menuI');
    
  }










}


