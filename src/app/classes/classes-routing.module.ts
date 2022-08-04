import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesLayoutComponent } from './classes-layout/classes-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ClassesLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassesRoutingModule {}
