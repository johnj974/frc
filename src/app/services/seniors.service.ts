import { Injectable } from '@angular/core';
import { SeniorBenefitModel } from '../models/seniorBenefit.model';

@Injectable({
  providedIn: 'root',
})
export class SeniorsService {
  //.

  seniorServicesArray: SeniorBenefitModel[] = [
    new SeniorBenefitModel(
      'bi bi-truck-front-fill',
      'Transport to & from Centre',
      'By FRC bus hire'
    ),
    new SeniorBenefitModel('bi bi-scissors', 'Hairdresser', 'Look your best'),
    new SeniorBenefitModel(
      'bi bi-tools',
      'DIY Service',
      'Provided by the team at FRC'
    ),
    new SeniorBenefitModel(
      'bi bi-chat',
      'Social Events',
      'Chats, bingo, cards, outings.'
    ),
    new SeniorBenefitModel(
      'bi bi-bag',
      'Cooked 2 course meal',
      'Prepared by our in-house chef'
    ),
    new SeniorBenefitModel(
      'bi bi-safe2',
      'Laundry',
      'Have your laundry done while you enjoy yourself.'
    ),
    new SeniorBenefitModel(
      'bi bi-basket',
      'Shopping',
      'Bring a list and our staff will collect your shopping.'
    ),
    new SeniorBenefitModel(
      'bi bi-clipboard-check',
      'Form Completion',
      'We can help with any queries.'
    ),
    new SeniorBenefitModel(
      'bi bi-capsule',
      'Pharmacy',
      'We can collect your prescriptions and deliver to you.'
    ),
  ];

  retrieveSeniorArray() {
    return this.seniorServicesArray.slice();
  }

  constructor() {}
}
