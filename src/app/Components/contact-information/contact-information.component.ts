import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss'],
})
export class ContactInformationComponent implements OnInit {
  contactInformation: FormGroup;
  constructor(private http: HttpClient, private route: Router) {}
  ngOnInit(): void {
    this.contactInformation = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      confirmemail: new FormControl('', Validators.required),
      subscribe: new FormControl(false),
    });
  }

  registrationData() {
    if (this.contactInformation.invalid) {
      // Mark all form controls as touched to show validation messages
      Object.values(this.contactInformation.controls).forEach((control) => {
        control.markAsTouched();
      });
      return;
    }

    console.log('Form Submitted', this.contactInformation.value);
    this.route.navigateByUrl('complete');
  }
}
