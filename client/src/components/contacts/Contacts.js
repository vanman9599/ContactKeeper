import React, { Fragment, useContext, useEffect } from 'react'
import ContactContext from '../../context/contact/ContactContext'
import ContactItem from './ContactItem'
import Spinner from '../layout/Spinner.js'

const Contacts = () => {
    const contactContext = useContext(ContactContext)

    const { contacts, filtered, getContacts, loading } = contactContext
    useEffect(() => {
        getContacts();
        // eslint-disable-next-line
    }, [])
    if (contacts !== null && contacts.length === 0 && !loading) {
        return (<h3>Please add a contact</h3>)
    } else {
        return (
            <Fragment>
                {contacts !== null && !loading ? (
                    filtered !== null ? filtered.map(contact => <ContactItem key={contact._id} contact={contact} />) :
                        contacts.map(contact => <ContactItem key={contact._id} contact={contact} />)
                ) : <Spinner />}



            </Fragment>

        )
    }

}

export default Contacts