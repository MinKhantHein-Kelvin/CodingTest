import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'two2d',
    loadChildren: () => import('./two2d/two2d.module').then(mod => mod.Two2dModule),
  },
  {
    path: 'three3d',
    loadChildren: () => import('./three3d/three3d.module').then(mod => mod.Three3dModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
