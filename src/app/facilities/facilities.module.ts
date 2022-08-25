import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilitiesRoutingModule } from './facilities-routing.module';
import { FacilitiesLayoutComponent } from './facilities-layout/facilities-layout.component';
import { SharedModule } from '../shared/shared.module';
import { FacilitiesDisplayComponent } from './facilities-display/facilities-display.component';
import { FacilitiesSingleComponent } from './facilities-single/facilities-single.component';

@NgModule({
  declarations: [FacilitiesLayoutComponent, FacilitiesDisplayComponent, FacilitiesSingleComponent],
  imports: [CommonModule, FacilitiesRoutingModule, SharedModule],
})
export class FacilitiesModule {}
