import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../store/contact.reducer';
import { addContact } from '../store/contact.actions';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  });

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

  }

  onSubmit() {
    const newContact = this.contactForm.value;
    this.store.dispatch(addContact(newContact));
  }

}
