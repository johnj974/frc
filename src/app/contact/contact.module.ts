import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactLayoutComponent } from './contact-layout/contact-layout.component';
import { SharedModule } from '../shared/shared.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactLayoutComponent, ContactFormComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class ContactModule {}
