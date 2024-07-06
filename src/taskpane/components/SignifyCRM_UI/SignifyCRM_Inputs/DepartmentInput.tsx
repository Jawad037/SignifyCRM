import { TextField } from '@mui/material'
import React from 'react'
import { GetDepartmentValue } from '../../../Utilty/GetCreateLeadValue';

const DepartmentInput = ({ onChange }) => {
    // const { department, handleDepartmentChange } = GetDepartmentValue();
    const handleInputChange = (event) => {
        const department = event.target.value;
        onChange(department);
    };
    return (
        <TextField label="Department" variant='standard'

            onChange={handleInputChange}
        ></TextField>
    )
}

export default DepartmentInput