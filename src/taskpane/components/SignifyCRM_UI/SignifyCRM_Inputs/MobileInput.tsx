import { TextField } from '@mui/material'
import React from 'react'
import GetMobileValue from '../../../Utilty/GetCreateLeadValue';

const MobileInput = ({ onChange }) => {
    // const { mobile, handleMobileChange } = GetMobileValue();
    const handleMobileChange = (event) => {
        const { value } = event.target;
        onChange(value);
    };
    return (

        <TextField label="Mobile" variant='standard'
            // value={mobile}
            onChange={handleMobileChange}
        ></TextField>
    )
}

export default MobileInput