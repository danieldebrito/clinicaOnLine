import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    LayoutRoutingModule
  ],
})
export class LayoutModule { }
