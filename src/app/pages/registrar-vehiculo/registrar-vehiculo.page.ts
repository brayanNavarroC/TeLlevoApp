import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-vehiculo',
  templateUrl: './registrar-vehiculo.page.html',
  styleUrls: ['./registrar-vehiculo.page.scss'],
})
export class RegistrarVehiculoPage implements OnInit {
  patente:string='';
  dueno:string='';
  ano:string='';
  constructor(private router : Router) { }

  ngOnInit() {
  }

  async irHome(){
    this.router.navigate(['/home'])
  }
}
