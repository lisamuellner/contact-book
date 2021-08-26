import { Component } from '@angular/core';
import { Contact } from './store/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedContact?: Contact;

  selectContact(contact: Contact){
    this.selectedContact = contact;
  }
}
