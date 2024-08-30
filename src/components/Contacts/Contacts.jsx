import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { UserMenu } from '../UserMenu/UserMenu';
import {
  fetchContacts,
  addContact,
  deleteContact,
  setFilter,
} from '../../redux/actions';
import css from './Contacts.module.css';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = newContact => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className='container'>
      <div className={css.fillIn}>
      <UserMenu/>
      <h1><span className={css.title}>Phonebook</span></h1>
      <ContactForm contacts={contacts} onAddContact={handleAddContact} />
      <h2 className={css.moreText}>Contacts</h2>
      <h5 className={css.moreText}>Find contacts by name</h5>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <ContactList onDeleteContact={handleDeleteContact} />
      </div>
    </div>
  );
}