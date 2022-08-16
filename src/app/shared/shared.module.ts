import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactBannerComponent } from './contact-banner/contact-banner.component';
import { TopBannerComponent } from './top-banner/top-banner.component';

@NgModule({
  declarations: [ContactBannerComponent, TopBannerComponent],
  imports: [CommonModule],
  exports: [ContactBannerComponent, TopBannerComponent],
})
export class SharedModule {}
