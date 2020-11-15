import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

import { AltaModule } from './components/alta/alta.module';
import { ListadoModule } from './components/listado/listado.module';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AltaModule,
    ListadoModule
  ]
})
export class UsersModule { }
