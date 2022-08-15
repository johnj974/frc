import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacilitiesLayoutComponent } from './facilities-layout/facilities-layout.component';

const routes: Routes = [
  {
    path: '',
    component: FacilitiesLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacilitiesRoutingModule {}
