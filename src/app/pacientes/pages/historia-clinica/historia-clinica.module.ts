import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';

import { HistoriaClinicaComponent } from './historia-clinica.component';
import { HistoriaClinicaRoutingModule } from './historia-clinica.routing.module';

@NgModule({
  declarations: [
    HistoriaClinicaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HistoriaClinicaRoutingModule
  ],
  exports: [
    HistoriaClinicaComponent
  ]
})
export class HistoriaClinicaModule { }
