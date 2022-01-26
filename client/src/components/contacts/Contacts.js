import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const { contacts } = contactContext;
    return (
        <Fragment>
            {contacts.map(contact => {
                return <ContactItem key={contact.id} contact={contact} />; // Don't forget return
            })}
        </Fragment>
    );
};

export default Contacts;
