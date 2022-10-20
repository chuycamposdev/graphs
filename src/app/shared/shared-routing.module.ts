import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'dashboard',
    loadChildren: () => import(`@modules/dashboard/dashboard.module`).then(m => m.DashboardModule)
  },
  {
    path:'portafolio',
    loadChildren: () => import(`@modules/portafolio/portafolio.module`).then(m => m.PortafolioModule)
  },
  {
    path:'acciones',
    loadChildren: () => import(`@modules/acciones/acciones.module`).then(m => m.AccionesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }