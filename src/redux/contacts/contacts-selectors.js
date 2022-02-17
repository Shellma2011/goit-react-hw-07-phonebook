// import { createSelector } from '@reduxjs/toolkit';

// export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

// console.log('getVisibleContacts getFilter', getFilter());
// console.log('getVisibleContacts getAllContacts', getContacts());

// export const getVisibleContacts = createSelector(
//   [getContacts, getFilter],
//   (contacts, filter) => {
//     const normalizedFilter = filter.toLowerCase();

//     console.log('getVisibleContacts normalizedFilter', normalizedFilter);
//     return contacts.filter(contact =>
//       contact.toLowerCase().includes(normalizedFilter)
//     );
//   }
// );
