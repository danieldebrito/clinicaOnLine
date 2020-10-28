import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TurnosListadoComponent } from './turnos-listado.component';

const routes: Routes = [
  { path: '', component: TurnosListadoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurnosListadoRoutingModule { }
