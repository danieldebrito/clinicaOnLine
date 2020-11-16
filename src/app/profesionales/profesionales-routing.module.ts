import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesionalesComponent } from './profesionales.component';

const routes: Routes = [
  {
    path: '',
    component: ProfesionalesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesionalesRoutingModule { }
