import { Component, Input } from '@angular/core';
import { Contact } from '../store/contact';

/**
 * ContactDetailsComponent
 * 
 * displays the details of the currently selected contact
 */
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent {

  // the currently selected contact
  @Input() contact?: Contact; 

}
