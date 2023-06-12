import React from "react";
import PropTypes from "prop-types";
import css from "./ContactForm.module.css";

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  }

  handleInputChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onAddContact(this.state);
    this.setState({ name: '', number: ''})
  }

  render() {
    return (
      <div className={css.container}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <label className={css.label}>Name</label>
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <label className={css.label}>Number</label>
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleInputChange}
          />
          <button className={css.button} type="submit">Add contact</button>
        </form>
      </div>
    )
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func,
}

export default ContactForm;