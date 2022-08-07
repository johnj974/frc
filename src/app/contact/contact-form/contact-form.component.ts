import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  //.
  contactForm: FormGroup;

  onSubmit() {
    console.log(this.contactForm);
  }

  constructor() {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      contactName: new FormControl(null),
      email: new FormControl(null),
      topic: new FormControl(null),
      message: new FormControl(null),
    });
  }
}
