import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DatepickerComponent } from './datepicker/datepicker.component';
import { TurnoConfirmacionComponent } from './turno-confirmacion/turno-confirmacion.component';
import { TurnosGridComponent } from './turnos-grid/turnos-grid.component';
import { TurnosReservarComponent } from './turnos-reservar/turnos-reservar.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DatepickerComponent,
    TurnoConfirmacionComponent,
    TurnosReservarComponent,
    TurnosGridComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DatepickerComponent,
    TurnoConfirmacionComponent,
    TurnosReservarComponent,
    TurnosGridComponent
  ]
})
export class TurnosComponentsModule { }
