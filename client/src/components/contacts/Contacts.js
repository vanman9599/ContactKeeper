import React, { Fragment, useContext } from 'react'
import ContactContext from '../../context/contact/ContactContext'
import ContactItem from './ContactItem'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const Contacts = () => {
    const contactContext = useContext(ContactContext)

    const { contacts, filtered } = contactContext

    if (contacts.length === 0) {
        return <h3>Please add a contact</h3>
    }
    return (
        <Fragment>

            {filtered !== null ? filtered.map(contact => <ContactItem key={contact.id} contact={contact} />) :
                contacts.map(contact => <ContactItem key={contact.id} contact={contact} />)}


        </Fragment>

    )
}

export default Contacts