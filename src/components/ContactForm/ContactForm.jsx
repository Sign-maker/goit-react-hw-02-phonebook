import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  nameInputId = nanoid();
  telInputId = nanoid();

  inputHandler = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmitHandler = event => {
    const { name, number } = this.state;
    event.preventDefault();
    this.props.onSubmit({ name: name.trim(), number: number.trim() });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.onSubmitHandler}>
        <label htmlFor={this.nameInputId}>Name</label>
        <input
          id={this.nameInputId}
          type="text"
          name="name"
          value={name}
          onChange={this.inputHandler}
          required
        />
        <label htmlFor={this.telInputId}>Number</label>
        <input
          id={this.telInputId}
          type="tel"
          name="number"
          value={number}
          onChange={this.inputHandler}
          required
        />
        <button type="submit" disabled={!(name && number)}>
          Add contact
        </button>
      </form>
    );
  }
}
