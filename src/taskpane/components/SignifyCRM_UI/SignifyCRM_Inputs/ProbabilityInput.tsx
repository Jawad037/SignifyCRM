import { TextField } from '@mui/material'
import React from 'react'
import { GetProbabilityValue } from '../../../Utilty/GetCreateOpportunity';

const ProbabilityInput = ({ value, onChange }) => {

    const handleInputChange = (event) => {
        const probability = event.target.value;
        onChange(probability);
    };


    // const { probability, handleProbabilityDateChange } = GetProbabilityValue();
    return (
        <TextField label="Probability (%)" variant='standard'

            value={value}
            onChange={handleInputChange}

        ></TextField>
    )
}

export default ProbabilityInput