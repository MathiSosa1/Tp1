import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisPelPage } from './mis-pel.page';

const routes: Routes = [
  {
    path: '',
    component: MisPelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisPelPageRoutingModule {}
