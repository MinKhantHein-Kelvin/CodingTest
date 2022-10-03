import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Two2dComponent } from './two2d/two2d.component';

const routes: Routes = [
  { path: '', component: Two2dComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Two2dRoutingModule { }
