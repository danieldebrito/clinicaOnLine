import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspecialidadesRoutingModule } from './especialidades-routing.module';
import { EspecialidadesComponent } from './especialidades.component';

import { AltaModule } from './components/alta/alta.module';
import { ListadoModule } from './components/listado/listado.module';

@NgModule({
  declarations: [
    EspecialidadesComponent
  ],
  imports: [
    CommonModule,
    EspecialidadesRoutingModule,
    AltaModule,
    ListadoModule
  ]
})
export class EspecialidadesModule { }
