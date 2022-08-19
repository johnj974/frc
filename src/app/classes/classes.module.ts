import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesRoutingModule } from './classes-routing.module';
import { ClassesLayoutComponent } from './classes-layout/classes-layout.component';
import { SharedModule } from '../shared/shared.module';
import { ClassesDisplayComponent } from './classes-display/classes-display.component';

@NgModule({
  declarations: [ClassesLayoutComponent, ClassesDisplayComponent],
  imports: [CommonModule, ClassesRoutingModule, SharedModule],
})
export class ClassesModule {}
