import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilitiesRoutingModule } from './facilities-routing.module';
import { FacilitiesLayoutComponent } from './facilities-layout/facilities-layout.component';


@NgModule({
  declarations: [
    FacilitiesLayoutComponent
  ],
  imports: [
    CommonModule,
    FacilitiesRoutingModule
  ]
})
export class FacilitiesModule { }
