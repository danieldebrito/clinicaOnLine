import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurnosListadoRoutingModule } from './turnos-listado-routing.module';
import { TurnosListadoComponent } from './turnos-listado.component';

@NgModule({
  declarations: [
    TurnosListadoComponent
  ],
  imports: [
    CommonModule,
    TurnosListadoRoutingModule
  ]
})
export class TurnosListadoModule { }
