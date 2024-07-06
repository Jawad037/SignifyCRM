import { TextField } from '@mui/material'
import React from 'react'
import { GetContactValue } from '../../../Utilty/GetCreateCaseValue';
import GetName from '../../../Utilty/GetName';

const ContactInput = ({ onChange }) => {
    const { name, setName } = GetName();


    // const { account, handleAccountNumberChange } = GetAccountNameValue()
    const handleContactChange = (event) => {
        const contactName = event.target.value;
        setName(contactName)
        onChange(contactName);
    };
    // const { contact, handleContactChange } = GetContactValue();
    return (
        <TextField label="Contact" variant='standard'
            value={name}
            // value={contact}
            onChange={handleContactChange}
        ></TextField>
    )
}

export default ContactInput