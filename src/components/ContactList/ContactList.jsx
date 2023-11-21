import { nanoid } from 'nanoid';
import { getContacts } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice/contactsSlice';
import { getFilter } from 'redux/selectors';
import { useEffect } from 'react';


export const ContactList = () => {
const dispatch = useDispatch();
  const contacts = useSelector(getContacts).items;

  let filterValue = useSelector(getFilter);

//   const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filterValue)
//   );

//    const handleClick = e => {
//      const contactId = e.target.id;
//     dispatch(deleteContact(contactId));
//    };

  return (
    <div>
      {contacts.map(contact => (
        <p key={nanoid()}>
          {contact.name}
          {''}
          {contact.number}
          <button  id={contact.id}>
            delete
          </button>
        </p>
      ))}
    </div>
  );
};
