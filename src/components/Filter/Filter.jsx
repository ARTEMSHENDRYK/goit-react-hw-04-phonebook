import React from "react";
import PropTypes from "prop-types";
import css from "./Filter.module.css";

class Filter extends React.Component {
  render() {
    const { filter, onFilter } = this.props;

    return (
      <div className={css.container}>
        <h3 className={css.title}>Find contacts by name</h3>
        <input className={css.input} type="text" value={filter} onChange={onFilter} />
      </div>
    )
  }
}

Filter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
}

export default Filter; 