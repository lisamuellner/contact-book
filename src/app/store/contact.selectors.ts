import { AppState, State } from './contact.reducer';
import { createSelector } from '@ngrx/store';

export const selectContactState = (state: AppState) => state.contactList;

export const selectContacts = createSelector(
  selectContactState,
  (state: State) => state.contacts
);
