
import React, { useState, useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';

const DueDateInput = ({ onChange }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const handleDueDateChange = (date) => {
        setSelectedDate(date);
        onChange(date.format('YYYY-MM-DD'));
        // onChange({ date: date.format('YYYY-MM-DD'), time: selectedTime ? selectedTime.format('HH:mm:ss') : null });
        // console.log('Selected date:', date);
    };


    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker
                        label="Due Date*"
                        value={selectedDate}
                        onChange={handleDueDateChange}
                    />
                </DemoContainer>
            </LocalizationProvider>


        </>
    );
};

export default DueDateInput;
