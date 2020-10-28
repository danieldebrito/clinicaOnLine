import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material.module';

import { TurnosComponentsModule } from './components/turnos-components.module';
import { TurnosBoardModule } from './pages/turnos-board/turnos-board.module';
import { TurnosListadoModule } from './pages/turnos-listado/turnos-listado.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    TurnosComponentsModule,
    TurnosBoardModule,
    TurnosListadoModule
  ]
})
export class TurnosModule { }
