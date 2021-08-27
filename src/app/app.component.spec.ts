import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { provideMockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { Contact } from './store/contact';
import { AppState } from './store/contact.reducer';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  const initialState: AppState = {
    contactList: {
      contacts: [
        {
          firstName: 'Max',
          lastName: 'Mustermann',
          phone: '0664 1234567',
          email: 'max.mustermann@gmail.com',
          address: 'Mustermannstraße 1'
        },
        {
          firstName: 'Donald',
          lastName: 'Duck',
          phone: '0699 1234567',
          email: 'donald.duck@gmail.com',
          address: 'Entenhausen 10'
        }
      ]
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent, 
        ContactFormComponent, 
        ContactDetailsComponent, 
        ContactListComponent
      ],
      providers: [ provideMockStore({ initialState })], 
      imports: [ ReactiveFormsModule ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should only show contact details if a contact is selected', () => {
    const getDetailsComponent = () => fixture.debugElement.query(By.directive(ContactDetailsComponent))
    expect(getDetailsComponent()).toBeNull();
    const selectedContact: Contact = {
      firstName: 'Donald',
      lastName: 'Duck',
      phone: '0699 1234567',
      email: 'donald.duck@gmail.com',
      address: 'Entenhausen 10'
    };
    component.selectedContact = selectedContact;

    fixture.detectChanges(); 
    expect(getDetailsComponent()).not.toBeNull();
  });
});
