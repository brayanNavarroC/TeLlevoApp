import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstadoViajePageRoutingModule } from './estado-viaje-routing.module';

import { EstadoViajePage } from './estado-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstadoViajePageRoutingModule
  ],
  declarations: [EstadoViajePage]
})
export class EstadoViajePageModule {}
