import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildcareRoutingModule } from './childcare-routing.module';
import { ChildcareLayoutComponent } from './childcare-layout/childcare-layout.component';


@NgModule({
  declarations: [
    ChildcareLayoutComponent
  ],
  imports: [
    CommonModule,
    ChildcareRoutingModule
  ]
})
export class ChildcareModule { }
