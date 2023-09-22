import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstadoViajePage } from './estado-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: EstadoViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstadoViajePageRoutingModule {}
