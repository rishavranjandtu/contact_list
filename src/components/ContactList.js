import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    console.log(props);

    const deleteContact_fun = (id) => {
        props.getContactId(id);
    }
    const renderContactList = props.contacts.map((contact) => {
        return <ContactCard contact={contact} clickHander = {deleteContact_fun} key={contact.id} />;
    });
    return (
        <div className="ui celled list">{renderContactList}</div>
    )

}

export default ContactList;
