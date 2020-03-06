import React from 'react';

export default function ContactList({ onDeleteContact, contacts }) {
  console.log(contacts);
  return (
    <ul>
      <div> </div>{' '}
      {contacts.map(contact => (
        <li key={contact.id}>
          {' '}
          {contact.name}: {contact.number}{' '}
          <button onClick={() => onDeleteContact(contact.id)}>Delete</button>{' '}
        </li>
      ))}{' '}
    </ul>
  );
}
