import { Injectable } from '@angular/core';
import { CommitteeModel } from '../models/committee.model';

@Injectable({
  providedIn: 'root',
})
export class CommitteeService {
  //.
  committeeArray: CommitteeModel[] = [
    new CommitteeModel(
      'bi bi-people',
      'The ARC sub-committee',
      'Aim to secure and develop a multi-purpose facility in The ARC',
      '',
      'A building interior'
    ),
    new CommitteeModel(
      'bi bi-people',
      'The ARC sub-committee',
      'Aim to secure and develop a multi-purpose facility in The ARC',
      'interior',
      'A building interior'
    ),
    new CommitteeModel(
      'bi bi-people',
      'Fair Green Subcommittee',
      `Aim to enhance the Fair Green area for the benefit of residents and
      visitors to SpringField in line with objectives set out at a public
      meeting held on 13/09/16 and SpringField Village Design Plan 2012.`,
      '',
      'A building interior'
    ),
    new CommitteeModel(
      'bi bi-people',
      'The ARC sub-committee',
      'Aim to secure and develop a multi-purpose facility in The ARC',
      'interior',
      'A building interior'
    ),
    new CommitteeModel(
      'bi bi-people',
      'FRC Senior Subcommittee',
      `Aim to enhance the Fair Green area for the benefit of residents and
      visitors to SpringField in line with objectives set out at a public
      meeting held on 13/09/16 and SpringField Village Design Plan 2012.`,
      '',
      'A building interior'
    ),
    new CommitteeModel(
      'bi bi-people',
      'The ARC sub-committee',
      'Aim to secure and develop a multi-purpose facility in The ARC',
      'interior',
      'A building interior'
    ),
  ];

  retrieveCommitteeArray() {
    return this.committeeArray.slice();
  }

  constructor() {}
}
