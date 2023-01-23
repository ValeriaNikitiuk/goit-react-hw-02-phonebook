import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteHandler }) => {
  return (
    <ul className={s.listContact}>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name + ':' + contact.number}

          <button type="button" onClick={onDeleteHandler}>
            {/* () => onDeleteHandler(contact.id) */}
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteHandler: PropTypes.func,
  // Of(
  //   PropTypes.shape({
  //     id: PropTypes.string.isRequired,
  //     name: PropTypes.string.isRequired,
  //     number: PropTypes.string.isRequired,
  //   })
  // ),
};

export default ContactList;
