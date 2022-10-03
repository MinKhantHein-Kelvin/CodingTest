import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Three3dRoutingModule } from './three3d-routing.module';
import { Three3dComponent } from './three3d/three3d.component';


@NgModule({
  declarations: [
    Three3dComponent
  ],
  imports: [
    CommonModule,
    Three3dRoutingModule
  ]
})
export class Three3dModule { }
