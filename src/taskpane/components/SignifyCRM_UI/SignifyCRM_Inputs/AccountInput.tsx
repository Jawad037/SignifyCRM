import { TextField } from '@mui/material'
import React from 'react'

import GetAmountValue from '../../../Utilty/GetCreateOpportunity';

const AccountInput = ({ onChange }) => {

    const handleAmountChange = (event) => {
        const amount = event.target.value;
        onChange(amount);
    };

    //const { amount, handleAmountChange } = GetAmountValue();
    return (
        <TextField label="Account*" variant='standard'

            onChange={handleAmountChange}

        ></TextField>
    )
}

export default AccountInput