import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourcesLayoutComponent } from './resources-layout/resources-layout.component';
import { ResourcesSingleComponent } from './resources-single/resources-single.component';

const routes: Routes = [
  {
    path: '',
    component: ResourcesLayoutComponent,
  },
  {
    path: ':id/:serviceName',
    component: ResourcesSingleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResourcesRoutingModule {}
