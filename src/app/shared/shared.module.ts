import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactBannerComponent } from './contact-banner/contact-banner.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { InfoBannerComponent } from './info-banner/info-banner.component';
import { ServeBannerComponent } from './serve-banner/serve-banner.component';

@NgModule({
  declarations: [
    ContactBannerComponent,
    TopBannerComponent,
    InfoBannerComponent,
    ServeBannerComponent,
  ],
  imports: [CommonModule],
  exports: [
    ContactBannerComponent,
    TopBannerComponent,
    InfoBannerComponent,
    ServeBannerComponent,
  ],
})
export class SharedModule {}
