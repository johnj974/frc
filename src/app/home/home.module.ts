import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { HomeResourceComponent } from './home-resource/home-resource.component';
import { HomeStatementComponent } from './home-statement/home-statement.component';
import { HomeChildComponent } from './home-child/home-child.component';
import { HomeSeniorComponent } from './home-senior/home-senior.component';
import { HomeInfoComponent } from './home-info/home-info.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeLayoutComponent,
    HomeResourceComponent,
    HomeStatementComponent,
    HomeChildComponent,
    HomeSeniorComponent,
    HomeInfoComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
