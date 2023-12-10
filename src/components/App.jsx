import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import initialContacts from '../datajson/initContacts.json';

export class App extends Component {
  state = {
    contacts: [...initialContacts],
    filter: '',
  };

  addContact = contactData => {
    const { name: newName } = contactData;

    if (this.isInContacts(newName)) {
      return alert(`${newName} is in contacts!`);
    }

    this.setState(prevState => {
      const contact = { id: nanoid(), ...contactData };

      return {
        contacts: [contact, ...prevState.contacts],
      };
    });
  };

  isInContacts = newName => {
    const { contacts } = this.state;
    const newNameToLowerCase = newName.toLowerCase();

    return contacts.some(
      ({ name }) => name.toLowerCase() === newNameToLowerCase
    );
  };

  onFilterChange = event => this.setState({ filter: event.target.value });

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const filterToLowercase = filter.toLowerCase();

    return !filter
      ? contacts
      : contacts.filter(({ name }) =>
          name.toLowerCase().includes(filterToLowercase)
        );
  };

  onItemDelete = delId =>
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(({ id }) => id !== delId) };
    });

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onFilterChange={this.onFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onItemDelete={this.onItemDelete}
        />
      </>
    );
  }
}
