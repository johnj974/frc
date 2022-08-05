import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactLayoutComponent } from './contact-layout/contact-layout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ContactLayoutComponent],
  imports: [CommonModule, ContactRoutingModule, SharedModule],
})
export class ContactModule {}
