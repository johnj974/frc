import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutLayoutComponent } from './about-layout/about-layout.component';
import { SharedModule } from '../shared/shared.module';
import { AboutCentreComponent } from './about-centre/about-centre.component';
import { AboutInfoComponent } from './about-info/about-info.component';
import { AboutTeamComponent } from './about-team/about-team.component';
import { AboutCommitteeComponent } from './about-committee/about-committee.component';

@NgModule({
  declarations: [AboutLayoutComponent, AboutCentreComponent, AboutInfoComponent, AboutTeamComponent, AboutCommitteeComponent],
  imports: [CommonModule, AboutRoutingModule, SharedModule],
})
export class AboutModule {}
