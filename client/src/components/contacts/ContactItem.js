import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import ContactContext from '../../context/contact/ContactContext'
import { CLEAR_CURRENT, SET_CURRENT } from '../../context/types'


export const ContactItem = ({ contact }) => {
    const contactContext = useContext(ContactContext)
    const { deleteContact, setCurrent, clearCurrent } = contactContext
    const { _id, name, email, phone, type } = contact

    const onDelete = () => {
        deleteContact(_id)
        clearCurrent()
    }
    return (
        <div className='card bg-light'>
            <h3 className='text-primary text-left' >
                {name}-{''}
                <span className={'badge ' +
                    (type === 'professional' ? 'badge-success' : 'badge-primary')}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
            </h3>
            <ul className="list">
                {email && (<li><i className="fas fa-envelope-open"></i>{email}</li>)}
                {phone && (<li><i className="fas fa-phone">{phone}</i></li>)}
            </ul>
            <p>
                <button className="btn btn-dark btn-sm" onClick={() => setCurrent(contact)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
            </p>
        </div >
    )
}

ContactItem.prototypes = {
    contact: PropTypes.object.isRequired
}
export default ContactItem