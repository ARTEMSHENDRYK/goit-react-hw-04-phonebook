import PropTypes from "prop-types";
import css from "./Filter.module.css";

function Filter({ filter, onFilter }) {
    console.log(filter);

  return (
    <div className={css.container}>
      <h3 className={css.title}>Find contacts by name</h3>
      <input className={css.input} type="text" value={filter} onChange={onFilter} />
    </div>
  )
}

Filter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
}

export default Filter; 