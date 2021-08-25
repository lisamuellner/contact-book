import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { StoreModule } from '@ngrx/store';
import { contactReducer } from './store/contact.reducer';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactFormComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    StoreModule.forRoot({contactList: contactReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
