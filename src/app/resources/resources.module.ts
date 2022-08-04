import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesLayoutComponent } from './resources-layout/resources-layout.component';


@NgModule({
  declarations: [
    ResourcesLayoutComponent
  ],
  imports: [
    CommonModule,
    ResourcesRoutingModule
  ]
})
export class ResourcesModule { }
