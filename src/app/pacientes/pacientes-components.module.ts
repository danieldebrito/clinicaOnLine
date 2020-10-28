import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFichaComponent } from './components/user-ficha/user-ficha.component';
import { HistoriaClinicaModule } from './pages/historia-clinica/historia-clinica.module';

import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    UserFichaComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    MaterialModule,
    HistoriaClinicaModule
  ],
  exports: [
    UserFichaComponent
  ]
})
export class PacientesComponentsModule { }
