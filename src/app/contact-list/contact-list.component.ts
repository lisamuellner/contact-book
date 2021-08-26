import { Component, Output, EventEmitter } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../store/contact.reducer';
import { selectContacts } from '../store/contact.selectors';
import { Observable } from 'rxjs';
import { Contact } from '../store/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {

  contacts$: Observable<Contact[]>;
  selectedRow?: number; 
  @Output() contactSelected = new EventEmitter<Contact>();

  constructor(private store: Store<AppState>) {
    this.contacts$ = this.store.pipe(select(selectContacts));
  }

  onTableRowClick(contact: Contact, index: number) {
    this.selectedRow = index;
    this.contactSelected.emit(contact);
  }

}
