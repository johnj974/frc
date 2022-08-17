import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeniorsRoutingModule } from './seniors-routing.module';
import { SeniorsLayoutComponent } from './seniors-layout/seniors-layout.component';
import { SharedModule } from '../shared/shared.module';
import { SeniorsBenefitsComponent } from './seniors-benefits/seniors-benefits.component';

@NgModule({
  declarations: [SeniorsLayoutComponent, SeniorsBenefitsComponent],
  imports: [CommonModule, SeniorsRoutingModule, SharedModule],
})
export class SeniorsModule {}
