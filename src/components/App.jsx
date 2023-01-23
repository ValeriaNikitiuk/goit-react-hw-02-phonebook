import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const addContact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return false;
    }
    this.setState(prevState => ({
      contacts: [addContact, ...prevState.contacts],
    }));
    return true;
  };

  onFilters = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  onDeleteHandler = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h1>Contacts</h1>
        <Filter value={this.filter} onChange={this.onFilters} />
        <ContactList
          deleteContact={this.onDeleteHandler}
          contacts={visibleContacts}
        />
      </div>
    );
  }
}
export default App;
