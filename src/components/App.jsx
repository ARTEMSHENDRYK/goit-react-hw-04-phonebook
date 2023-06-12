import React from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import css from "./App.module.css";

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem("Contacts"));
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_prevPops, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem("Contacts", JSON.stringify(contacts));
    }
  }
  
  handleSubmit = ({ name, number }) => {
    const { contacts } = this.state;
    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase()))
    {
      alert(`${name} is already in contacts.`);
      return;
    }
    this.setState({ contacts: [...contacts, { id: nanoid(), name: name, number: number }] });
  }

  handleFilter = evt => {
    this.setState({ filter: evt.target.value });
  }

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
  }

  handleDelete = id => {
    const { contacts } = this.state;
    this.setState({ contacts: contacts.filter(contact => contact.id !== id) });
  }

  render() {  
    return (
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onAddContact={this.handleSubmit}/>
        <h2 className={css.title}>Contacts</h2>
        <Filter
          filter={this.state.filter}
          onFilter={this.handleFilter}
        />
        {this.state.contacts.length > 0
          ? (
            <ContactList
                contacts={this.filterContacts()} onDelete={this.handleDelete}/>
          )
          : (<p className={css.title}>There are no contacts.</p>)    
        }
      </div>
    );
  };
}  

export default App;