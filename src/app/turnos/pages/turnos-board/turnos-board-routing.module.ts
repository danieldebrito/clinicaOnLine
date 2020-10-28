import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TurnosBoardComponent } from './turnos-board.component';

const routes: Routes = [
  { path: '', component: TurnosBoardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurnosBoardRoutingModule { }
