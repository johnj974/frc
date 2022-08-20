import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesLayoutComponent } from './classes-layout/classes-layout.component';
import { ClassesSingleComponent } from './classes-single/classes-single.component';

const routes: Routes = [
  {
    path: '',
    component: ClassesLayoutComponent,
  },
  {
    path: ':id/:name',
    component: ClassesSingleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassesRoutingModule {}
