import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppState } from '../store/contact.reducer';

import { ContactListComponent } from './contact-list.component';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;
  let store: MockStore<AppState>;

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
      declarations: [ ContactListComponent ],
      providers: [ provideMockStore({ initialState })]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a list of contacts', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toEqual(initialState.contactList.contacts.length);
    rows.forEach((row, index) => {
      const [firstName, lastName] = row.queryAll(By.css('td')).map(element => element.nativeElement.innerHTML);
      expect(firstName).toEqual(initialState.contactList.contacts[index].firstName);
      expect(lastName).toEqual(initialState.contactList.contacts[index].lastName);
    });
  });

  it('should emit contact when table row is clicked', () => {
    spyOn(component.contactSelected, 'emit');

    const firstRow = fixture.debugElement.queryAll(By.css('tbody tr'))[0];
    const expectedContact = initialState.contactList.contacts[0];

    firstRow.nativeElement.dispatchEvent(new Event('click'));

    expect(component.contactSelected.emit).toHaveBeenCalledWith(expectedContact);
  });
  
  it('should highlight selected row', () => {
    spyOn(component.contactSelected, 'emit');

    const firstRow = fixture.debugElement.queryAll(By.css('tbody tr'))[0];
    expect(firstRow.nativeElement.className).not.toEqual('table-active');

    firstRow.nativeElement.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.selectedRow).toEqual(0);
    expect(firstRow.nativeElement.className).toEqual('table-active');
  });

  it('should display contacts not available when contact list is empty', () => {
    store.setState({contactList: { contacts: []}});
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('table'))).toBeNull();
    const expectedMessage = 'No contacts available.'
    expect(fixture.debugElement.query(By.css('p')).nativeElement.innerHTML).toEqual(expectedMessage);
  });

});
