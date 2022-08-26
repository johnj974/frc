import { Component, OnInit } from '@angular/core';
import { CommitteeModel } from 'src/app/models/committee.model';
import { CommitteeService } from 'src/app/services/committee.service';

@Component({
  selector: 'app-about-committee',
  templateUrl: './about-committee.component.html',
  styleUrls: ['./about-committee.component.scss'],
})
export class AboutCommitteeComponent implements OnInit {
  //.

  committeeList: CommitteeModel[];
  constructor(private committeeService: CommitteeService) {}

  ngOnInit(): void {
    this.committeeList = this.committeeService.retrieveCommitteeArray();
  }
}
