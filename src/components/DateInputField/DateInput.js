import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DateContainer, DateInputField, DateInputLabel } from '../ScreensHeader/subHeaderStyles';

//Assets
import calendarIcon from '../../images/date-icon.svg';

  const DateInput = ({ width , dateLabelField}) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const formattedDateLabel = dateLabelField || 'Date';
  const datePlaceholder = 'MM/dd/yyyy';
  const options = []; 

  // Function to handle date selection
  const handleDateSelect = (date) => {
    setSelectedDate(date); 
  };

  // Custom input component with the calendar image inside
  const CustomDatePickerInput = ({ value, onClick, width }) => (
    <div style={{ position: 'relative', marginRight: '0px', width }}>
      <input
        type="text"
        value={value}
        placeholder={datePlaceholder}
        onClick={onClick}
        readOnly
        style={{ 
          borderRadius: '3px',
          border: '1px solid rgba(9, 30, 66, 0.141176)',
          height: '36px',
          fontSize: '14px',
          padding: '0 10px',
          width: '100%',
        }}
      />
      <img
        src={calendarIcon}
        alt="Calendar"
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          cursor: 'pointer',
        }}
        onClick={onClick}
      />
    </div>
  );

  return (
    <>
      <DateContainer>
        <DateInputLabel>
          <label htmlFor="datePicker">{formattedDateLabel}</label>
        </DateInputLabel>
        {/* Use the DatePicker component */}
        <DateInputField>
          <DatePicker
            id="datePicker"
            selected={selectedDate}
            placeholderText={datePlaceholder}
            onChange={handleDateSelect}
            customInput={<CustomDatePickerInput width={width}/>}
          />
        </DateInputField>
      </DateContainer>
    </>
  );
};

export default DateInput;