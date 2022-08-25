import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilitiesRoutingModule } from './facilities-routing.module';
import { FacilitiesLayoutComponent } from './facilities-layout/facilities-layout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FacilitiesLayoutComponent],
  imports: [CommonModule, FacilitiesRoutingModule, SharedModule],
})
export class FacilitiesModule {}
