import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';





@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.page.html',
  styleUrls: ['./contactanos.page.scss'],


})
export class ContactanosPage implements OnInit {

  constructor(private router: Router) { 

    
  }
irAhome(){ this.router.navigate(['/home'])}
  




  ngOnInit() {
  }





generarMensaje(){
  const primeraParte = "https://wa.me/+5412345678?text=";

}





}
