import React from "react";
import PropTypes from "prop-types";
import ContactElement from "components/ContactElement/ContactElement";
import css from "./ContactList.module.css";

class ContactList extends React.Component {
  render() {
    const { contacts, onDelete } = this.props;
    return (
      <div className={css.container}>
        <ul>
          {contacts.map(({ id, name, number }) => {
            return (
              <li className={css.list} key={id}>
                <ContactElement
                  id={id}
                  name={name}
                  number={number}
                  onDelete={onDelete}
                />
              </li>
            );  
          })}
        </ul>
      </div>
    )
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func,
}

export default ContactList;