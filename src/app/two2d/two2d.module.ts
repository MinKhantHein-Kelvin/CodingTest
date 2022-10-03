import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Two2dRoutingModule } from './two2d-routing.module';
import { Two2dComponent } from './two2d/two2d.component';


@NgModule({
  declarations: [
    Two2dComponent
  ],
  imports: [
    CommonModule,
    Two2dRoutingModule
  ]
})
export class Two2dModule { }
