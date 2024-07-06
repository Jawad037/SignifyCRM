import { TextField } from '@mui/material'
import React from 'react'
import GetAmountValue from '../../../Utilty/GetCreateOpportunity';

const AmountInput = ({ onChange }) => {



    const handleAmountChange = (event) => {
        const amount = event.target.value;
        onChange(amount);
    };

    // const { amount, handleAmountChange } = GetAmountValue();

    return (

        <TextField label="Amount*" variant='standard'

            onChange={handleAmountChange}


        ></TextField>
    )
}

export default AmountInput