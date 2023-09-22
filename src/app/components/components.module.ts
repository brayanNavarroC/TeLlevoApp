import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { IonicModule, MenuController } from '@ionic/angular';



@NgModule({
  declarations: [HeadComponent,FootComponent],
  imports: [
    CommonModule,IonicModule
  ],
  exports: [HeadComponent, FootComponent]
})
export class ComponentsModule { }
