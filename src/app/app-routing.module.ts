import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'mis-pel',
    loadChildren: () => import('./mis-pel/mis-pel.module').then( m => m.MisPelPageModule)
  },
  {
    path: 'terror',
    loadChildren: () => import('./terror/terror.module').then( m => m.TerrorPageModule)
  },
  {
    path: 'romance',
    loadChildren: () => import('./romance/romance.module').then( m => m.RomancePageModule)
  },
  {
    path: 'accion',
    loadChildren: () => import('./accion/accion.module').then( m => m.AccionPageModule)
  },
  
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
