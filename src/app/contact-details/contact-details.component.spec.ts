import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ContactDetailsComponent } from './contact-details.component';

describe('ContactDetailsComponent', () => {
  let component: ContactDetailsComponent;
  let fixture: ComponentFixture<ContactDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the contact details', () => {
    const expectedContact = {
      firstName: 'Max',
      lastName: 'Mustermann',
      phone: '0664 1234567',
      email: 'max.mustermann@gmail.com',
      address: 'Mustermannstraße 1'
    };
    const expectedValues = Object.values(expectedContact);
    component.contact = expectedContact;

    fixture.detectChanges();

    const tableValues = fixture.debugElement.queryAll(By.css('td')).map(element => element.nativeElement.innerHTML);
    expect(tableValues).toEqual(expectedValues);
  });
});
