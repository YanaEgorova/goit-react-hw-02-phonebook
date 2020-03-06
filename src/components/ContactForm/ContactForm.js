import React, { Component } from 'react';
import './ContactForm.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    // console.log(e.target.name);
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddContact(this.state.name, this.state.number);
    // this.props.onAddContact(this.state.number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className="ContactForm-form" onSubmit={this.handleSubmit}>
        <label>
          <span>Name</span>
          <input
            type="text"
            value={name}
            onChange={this.handleChange}
            name="name"
          ></input>
        </label>
        <label>
          <span>Number</span>
          <input
            type="text"
            value={number}
            name="number"
            onChange={this.handleChange}
          ></input>
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
