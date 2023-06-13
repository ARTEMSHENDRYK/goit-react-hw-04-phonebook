import {useState, useEffect} from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import css from "./App.module.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");
  
  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem("Contacts"));
    console.log(parsedContacts);
    parsedContacts ? setContacts(parsedContacts) : setContacts([]);
  }, []);

  useEffect(() => {
    localStorage.setItem("Contacts", JSON.stringify(contacts));
  }, [contacts])
  
  function handleSubmit(name, number) {
    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
      return;
    }

    setContacts([...contacts, { id: nanoid(), name: name, number: number }]);
  }

  function handleFilter(evt) {
    setFilter({ filter: evt.target.value });
  }

  function filterContacts() {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
  }

  function handleDelete(id) {
    this.setContacts({ contacts: contacts.filter(contact => contact.id !== id) });
  }

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAddContact={handleSubmit}/>
      <h2 className={css.title}>Contacts</h2>
      <Filter
        filter={filter}
        onFilter={handleFilter}
      />
      {contacts.length > 0
        ? (
          <ContactList
              contacts={filterContacts()} onDelete={handleDelete}/>
        )
        : (<p className={css.title}>There are no contacts.</p>)    
      }
    </div>
  );
}  

export default App;