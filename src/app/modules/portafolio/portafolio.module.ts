import { NgModule } from '@angular/core';
import { PortafolioRoutingModule } from './portafolio-routing.module';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { SharedModule } from '@shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    PortafolioComponent
  ],
  imports: [
    PortafolioRoutingModule,
    SharedModule,
    MatTabsModule,
    CommonModule
  ]
})
export class PortafolioModule { }
