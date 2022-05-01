import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisPelPageRoutingModule } from './mis-pel-routing.module';

import { MisPelPage } from './mis-pel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisPelPageRoutingModule
  ],
  declarations: [MisPelPage]
})
export class MisPelPageModule {}
