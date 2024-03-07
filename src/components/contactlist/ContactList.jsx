import React from 'react';
import { nanoid } from 'nanoid';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'myredux/selectors';
import { deleteContact } from 'myredux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const onContactDelete = evt => {
    const idToDelete = evt.target.value;
    dispatch(deleteContact(idToDelete));
  };
  /* const onContactDelete = evt => {
    const idToDelete = evt.target.value;
    setContacts(prevContacts =>
      prevContacts.filter(({ id }) => id !== idToDelete)
    );
  }; */

  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <ContactListItem
          contact={contact}
          onContactDelete={onContactDelete}
          key={nanoid()}
        />
      ))}
    </ul>
  );
};
const ContactListItem = ({ contact, onContactDelete }) => {
  return (
    <li>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button type="button" onClick={onContactDelete} value={contact.id}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.object,
  onContactDelete: PropTypes.func,
};
export default ContactList;
