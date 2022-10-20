import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccionesComponent } from './pages/acciones/acciones.component';
import { AccionesRoutingModule } from './acciones-routing.module';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [
    AccionesComponent
  ],
  imports: [
    CommonModule,
    AccionesRoutingModule,
    SharedModule
  ]
})
export class AccionesModule { }
