import { Contact } from './contact';
import { createReducer, on } from '@ngrx/store';
import { addContact } from './contact.actions';

export interface State {
  contacts: Contact[];
}

export interface AppState {
  contactList: State;
}

const initialState: State = {
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

export const contactReducer = createReducer(
  initialState,
  on(addContact, (state: State, {contact}) =>
    ({
      ...state,
      contacts: [...state.contacts, contact]
    }))
);
