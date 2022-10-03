import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Three3dComponent } from './three3d/three3d.component';

const routes: Routes = [
  { path: '', component: Three3dComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Three3dRoutingModule { }
