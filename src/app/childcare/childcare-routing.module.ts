import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildcareLayoutComponent } from './childcare-layout/childcare-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ChildcareLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildcareRoutingModule {}
