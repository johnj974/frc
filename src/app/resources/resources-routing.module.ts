import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourcesLayoutComponent } from './resources-layout/resources-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ResourcesLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResourcesRoutingModule {}
