import React from 'react';

export default function ContactList({ onDeleteContact, contacts }) {
  return (
    <ul>
      {' '}
      {contacts.map(contact => (
        <li key={contact.id}>
          {' '}
          {contact.name}: {contact.number}{' '}
          <button onClick={() => onDeleteContact(contact.id)}> Delete </button>{' '}
        </li>
      ))}{' '}
    </ul>
  );
}
