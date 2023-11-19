import { nanoid } from 'nanoid';
import { getContacts } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice/contactsSlice';
import { getFilter } from 'redux/selectors';

export const ContactList = () => {
  let contacts = useSelector(getContacts);

  if (localStorage.lenght === 0) {
    localStorage.setItem('Persons', JSON.stringify(contacts));
  }

  let filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );

  const handleClick = e => {
    const contactId = e.target.id;
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      {filteredContacts.map(contact => (
        <p key={nanoid()}>
          {contact.name}
          {''}
          {contact.number}
          <button onClick={handleClick} id={contact.id}>
            delete
          </button>
        </p>
      ))}
    </div>
  );
};
