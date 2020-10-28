import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';

import { TurnosBoardRoutingModule } from './turnos-board-routing.module';
import { TurnosBoardComponent } from './turnos-board.component';
import { TurnosComponentsModule } from 'src/app/turnos/components/turnos-components.module';
import { PacientesComponentsModule } from 'src/app/pacientes/pacientes-components.module';


@NgModule({
  declarations: [
    TurnosBoardComponent
  ],
  imports: [
    CommonModule,
    TurnosBoardRoutingModule,
    MaterialModule,
    TurnosComponentsModule,
    PacientesComponentsModule
  ]
})
export class TurnosBoardModule { }
