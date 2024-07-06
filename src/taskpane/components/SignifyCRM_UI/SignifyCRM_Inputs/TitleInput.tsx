import { TextField } from '@mui/material'
import React from 'react'
import { GetTitleValue } from '../../../Utilty/GetCreateLeadValue';

const TitleInput = ({ onChange }) => {
    // const { title, handleTitleChange } = GetTitleValue();
    const handleInputChange = (event) => {
        const title = event.target.value;
        onChange(title);
    };
    return (
        <TextField label="Title" variant='standard'

            onChange={handleInputChange}
        ></TextField>
    )
}

export default TitleInput