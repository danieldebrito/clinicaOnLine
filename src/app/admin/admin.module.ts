import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ItemsSideBarComponent } from './components/items-side-bar/items-side-bar.component';


@NgModule({
  declarations: [AdminComponent, ItemsSideBarComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule
  ]
})
export class AdminModule { }
