import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { SharedRoutingModule } from './shared-routing.module';
import { CardComponent } from './components/card/card.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    SidebarComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgApexchartsModule,
    //Agular - Material
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule
  ],
  exports: [
    SidebarComponent,
    CardComponent
  ]
})
export class SharedModule { }
