import { TextField } from '@mui/material'
import React from 'react'
import GetOfficePhoneValue from '../../../Utilty/GetCreateAccountValue';

const OfficePhoneInput = ({ onChange }) => {

    const handleInputChange = (event) => {
        const officePhone = event.target.value;
        onChange(officePhone);
    };


    // const { phone, handleOfficePhoneChange } = GetOfficePhoneValue();
    return (
        <TextField label="Office Phone" variant='standard'
            // value={phone}
            onChange={handleInputChange}
        ></TextField>
    )
}

export default OfficePhoneInput