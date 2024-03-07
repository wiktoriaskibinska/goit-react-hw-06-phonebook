import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFilter } from 'myredux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const onFilterChange = evt => {
    evt.preventDefault();
    const filterValue = evt.target.value;
    dispatch(setFilter(filterValue.toLowerCase()));
  };

  /**  const onFilterChange = evt => {
    setFilter(evt.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
   const visibleContacts = getVisibleContacts();
  */

  return (
    <div className={css.filter}>
      <label className={css.filterLabel}>
        Find contacts by Name
        <input
          className={css.filterInput}
          type="text"
          onChange={onFilterChange}
        ></input>
      </label>
    </div>
  );
};
Filter.propTypes = {
  onFilterChange: PropTypes.func,
};

export default Filter;
