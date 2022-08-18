import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesLayoutComponent } from './resources-layout/resources-layout.component';
import { SharedModule } from '../shared/shared.module';
import { ResourcesDisplayComponent } from './resources-display/resources-display.component';

@NgModule({
  declarations: [ResourcesLayoutComponent, ResourcesDisplayComponent],
  imports: [CommonModule, ResourcesRoutingModule, SharedModule],
})
export class ResourcesModule {}
