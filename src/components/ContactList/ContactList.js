import React, { Component } from 'react';
import { ContactListStyled } from './ContactListStyled';

class ContactList extends Component {
  // state = {
  //   name: "",
  //   number: "",
  // };

  // test = () => {
  //   this.setState((prevState) => ({
  //     active: prevState.active===true?
  //   }))
  // }

  // deleteContact = (activeElid) => {
  //   this.setState((prevState) => ({
  //     active: prevState.active.filter((activeEl) => activeEl.id !== activeElid),
  //   }));
  // };

  render() {
    const contacts = this.props.contactsInState;
    const deleteFn = this.props.OnDeleteContact;

    const normalizeFilter = this.props.filter.toLocaleLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );

    return (
      <ContactListStyled className="Contact">
        <label>Contact list:</label>
        <ul className="Contact__list">
          {visibleContacts.map(contact => (
            <li key={contact.id} className="Contact__item">
              <p className="Contact__text">
                {contact.name}: {contact.number}
              </p>
              <button
                type="button"
                className="Contact__button"
                onClick={() => deleteFn(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </ContactListStyled>
    );
  }
}

export default ContactList;
