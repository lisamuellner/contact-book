import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { addContact } from '../store/contact.actions';
import { AppState } from '../store/contact.reducer';

import { ContactFormComponent } from './contact-form.component';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;
  let store: MockStore<AppState>;

  const initialState: AppState = {
    contactList: {
      contacts: []
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFormComponent ],
      providers: [ provideMockStore({ initialState }) ], 
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
    spyOn(store, 'dispatch');

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch action to create new contact on submit', () => {
    const newContact = {
      firstName: 'Ronald', 
      lastName: 'McDonald',
      phone: '0699 9876543',
      email: 'ronald@mcdonald.com',
      address: 'McDonald-Straße 12'
    };

    component.contactForm.setValue(newContact);
    
    fixture.detectChanges();
    component.onSubmit()

    expect(store.dispatch).toHaveBeenCalledWith(addContact(newContact));
  });
});
