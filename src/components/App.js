import React, { Component } from "react";
import Form from "./Form/Form";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
    parsedContacts && this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = (data) => {
    this.setState({ contacts: [...this.state.contacts, data] });
  };

  contactFind = (name) => {
    return this.state.contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  render() {
    return (
      <>
        <Form
          onSubmit={this.formSubmitHandler}
          contactFind={this.contactFind}
        />
        <Filter filter={this.state.filter} onFilterChange={this.changeFilter} />
        <ContactList
          filter={this.state.filter}
          contactsInState={this.state.contacts}
          OnDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}
export default App;
