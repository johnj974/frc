import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeniorsRoutingModule } from './seniors-routing.module';
import { SeniorsLayoutComponent } from './seniors-layout/seniors-layout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SeniorsLayoutComponent],
  imports: [CommonModule, SeniorsRoutingModule, SharedModule],
})
export class SeniorsModule {}
