import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClassesService } from 'src/app/services/classes.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  //.
  contactForm: FormGroup;
  availableClasses = [];

  onSubmit() {
    console.log(this.contactForm);
  }

  constructor(private classeService: ClassesService) {}

  ngOnInit(): void {
    this.availableClasses = this.classeService.classesAvailableArray;

    this.contactForm = new FormGroup({
      contactName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      topic: new FormControl(null, Validators.required),
      message: new FormControl(null, [
        Validators.required,
        Validators.maxLength(100),
      ]),
    });
  }
}
