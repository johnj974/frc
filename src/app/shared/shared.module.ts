import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactBannerComponent } from './contact-banner/contact-banner.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { InfoBannerComponent } from './info-banner/info-banner.component';

@NgModule({
  declarations: [
    ContactBannerComponent,
    TopBannerComponent,
    InfoBannerComponent,
  ],
  imports: [CommonModule],
  exports: [ContactBannerComponent, TopBannerComponent, InfoBannerComponent],
})
export class SharedModule {}
