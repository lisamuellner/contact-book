import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
export class ContactListComponent implements OnInit {

  contacts$: Observable<Contact[]>;
  selectedRow: number = -1; 
  @Output() contactSelected = new EventEmitter<Contact>();

  constructor(private store: Store<AppState>) {
    this.contacts$ = this.store.pipe(select(selectContacts));
  }

  ngOnInit(): void {
  }

  onTableRowClick(contact: Contact, index: number) {
    this.selectedRow = index;
    this.contactSelected.emit(contact);
  }

}
