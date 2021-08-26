import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../store/contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  @Input() selectedContact?: Contact; 

  constructor() { }

  ngOnInit(): void {}

}
