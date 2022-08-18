import { Component, OnInit } from '@angular/core';
import { SeniorBenefitModel } from 'src/app/models/seniorBenefit.model';
import { SeniorsService } from 'src/app/services/seniors.service';

@Component({
  selector: 'app-seniors-benefits',
  templateUrl: './seniors-benefits.component.html',
  styleUrls: ['./seniors-benefits.component.scss'],
})
export class SeniorsBenefitsComponent implements OnInit {
  //.

  seniorArray: SeniorBenefitModel[];

  constructor(private seniorsService: SeniorsService) {}

  ngOnInit(): void {
    this.seniorArray = this.seniorsService.retrieveSeniorArray();
  }
}
