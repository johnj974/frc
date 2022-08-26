import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacilitiesLayoutComponent } from './facilities-layout/facilities-layout.component';
import { FacilitiesSingleComponent } from './facilities-single/facilities-single.component';

const routes: Routes = [
  {
    path: '',
    component: FacilitiesLayoutComponent,
  },
  {
    path: ':id/:name',
    component: FacilitiesSingleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacilitiesRoutingModule {}
