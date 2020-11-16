import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesionalesRoutingModule } from './profesionales-routing.module';
import { ProfesionalesComponent } from './profesionales.component';
import { ItemsSideBarComponent } from './components/items-side-bar/items-side-bar.component';

@NgModule({
  declarations: [
    ProfesionalesComponent,
    ItemsSideBarComponent
  ],
  imports: [
    CommonModule,
    ProfesionalesRoutingModule
  ]
})
export class ProfesionalesModule { }
