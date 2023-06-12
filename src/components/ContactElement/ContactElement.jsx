import React from "react";
import PropTypes from "prop-types";
import css from "./ContactElement.module.css";

class ContactElement extends React.Component {

  render() {
    const { id, name, number, onDelete } = this.props;

    return (
      <>
        <p className={css.name}>{name}:</p>
        <p className={css.number}>{number}</p>
        <button className={css.button} type="button" onClick={() => onDelete(id)}>Delete</button>
      </>
    )
  }
}

ContactElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
}


export default ContactElement;