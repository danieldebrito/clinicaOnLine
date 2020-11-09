import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesionalesRoutingModule } from './profesionales-routing.module';
import { ProfesionalesComponent } from './profesionales.component';


@NgModule({
  declarations: [ProfesionalesComponent],
  imports: [
    CommonModule,
    ProfesionalesRoutingModule
  ]
})
export class ProfesionalesModule { }
