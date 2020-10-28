import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';

import { HistoriaClinicaComponent } from './historia-clinica.component';

@NgModule({
  declarations: [
    HistoriaClinicaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    HistoriaClinicaComponent
  ]
})
export class HistoriaClinicaModule { }
