import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  changeFilter = filter => {
    this.setState({
      filter,
    });
  };

  deleteContact = id => {
    return this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    const isName = this.state.contacts.some(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase()),
    );

    console.log(isName);

    if (isName) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, contact],
        };
      });
    }
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <h1> Phonebook </h1> <ContactForm onAddContact={this.addContact} />{' '}
        <h2> Contacts </h2>{' '}
        {contacts.length > 1 && (
          <Filter value={filter} onChange={this.changeFilter} />
        )}
        {contacts.length > 0 && (
          <ContactList
            onDeleteContact={this.deleteContact}
            contacts={visibleContacts}
          />
        )}{' '}
      </div>
    );
  }
}
