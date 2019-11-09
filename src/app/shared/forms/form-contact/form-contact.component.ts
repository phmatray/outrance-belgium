import { Component, OnInit } from '@angular/core';
import { faCheck, faEnvelope, faExclamationTriangle, faUser } from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;

  /* Font Awesome icons */
  faEnvelope = faEnvelope;
  faExclamationTriangle = faExclamationTriangle;
  faUser = faUser;
  faCheck = faCheck;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  // convenience getters for easy access to form fields
  get f() { return this.messageForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.messageForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.messageForm.value, null, 4));
  }

  onReset() {
    // reset whole form back to initial state
    this.submitted = false;
    this.messageForm.reset();
  }

  onClear() {
    // clear errors
    this.submitted = false;
  }
}
