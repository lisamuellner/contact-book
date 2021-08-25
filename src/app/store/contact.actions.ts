import { createAction } from '@ngrx/store';
import { Contact } from './contact';

export const ADD_CONTACT = '[Contact] ADD_CONTACT';

export const addContact = createAction(
  ADD_CONTACT,
  (contact: Contact) => ({contact})
);
