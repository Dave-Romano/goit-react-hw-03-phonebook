import React, { Component } from "react";
import shortid from "shortid";
import { FormStyled } from "./FormStyled";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  stateReset = () => {
    this.setState({ name: "", number: "" });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.props.contactFind(this.state.name)) {
      return alert(`${this.state.name} has been already in contact list!`);
    }
    this.props.onSubmit({
      ...this.state,
      id: shortid.generate(),
    });
    this.stateReset();
  };

  render() {
    return (
      <FormStyled>
        <div className="Phonebook">
          <h1>Phonebook</h1>
          <div className="Phonebook__container">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="form-name-id">Name:</label>
              <br />
              <input
                id="form-name-id"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
              />
              <br />

              <label htmlFor="form-number-id">Number:</label>
              <br />
              <input
                id="form-number-id"
                type="tel"
                name="number"
                value={this.state.number}
                onChange={this.handleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
              />
              <br />
              <button type="submit">add contact</button>
            </form>
          </div>
        </div>
      </FormStyled>
    );
  }
}

export default Form;
