import { Component } from '@angular/core';
import { Contact } from './store/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contact-book';

  selectedContact: Contact | undefined = undefined;

  selectContact(contact: Contact){
    this.selectedContact = contact;
  }
}
