import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeniorsLayoutComponent } from './seniors-layout/seniors-layout.component';

const routes: Routes = [
  {
    path: '',
    component: SeniorsLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeniorsRoutingModule {}
