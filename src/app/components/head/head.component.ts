import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss'],
})
export class HeadComponent  implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}

  async home(){
    this.router.navigate(['/home']);
  }
  async perfil(){
    this.router.navigate(['/perfil']);
  }
  async registro(){
    this.router.navigate(['/registrar-vehiculo']);
  }
  async salir(){
    this.router.navigate(['/login']);
  }
}
