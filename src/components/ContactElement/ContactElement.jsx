import PropTypes from "prop-types";
import css from "./ContactElement.module.css";

function ContactElement({ id, name, number, onDelete }) {
  return (
    <>
      <p className={css.name}>{name}:</p>
      <p className={css.number}>{number}</p>
      <button className={css.button} type="button" onClick={() => onDelete(id)}>Delete</button>
    </>
  )
}

ContactElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
}


export default ContactElement;