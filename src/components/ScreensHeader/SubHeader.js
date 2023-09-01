import React, { useEffect, useRef, useState, useCallback  } from 'react'
import { ButtonContainer, Container, ContainerLeft, ContainerRight, DateInputField, DateInputLabel, DescriptionText, GetRecordsContainer, HeaderFilterContainder, HeaderFilterHeadings,RecordBox, VerticalContainer } from './subHeaderStyles';
import Headings from '../Headings/Headings';
import Button from '../Buttons/Button';

// Assets
import Icon from '../../images/down-icon.svg';
import SearchIcon from '../../images/search-icon.svg';
import Input from '../Inputs/Input';
import { styled } from 'styled-components';
import CustomDrop from '../MainHeader/Components/SubComponents/CustomDrop';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import calendarIcon from '../../images/date-icon.svg';
import CustomDateInput from '../DateInputField/DateInputField';
import MultiSelectDropDown, { Container1 } from '../Inputs/MultiSelectDropDown';

export const DropContianer = styled.div`
    position:absolute;
    right:10px;
    z-index:99;
    top:41px;
`;

// Hook
function useOnClickOutside(ref, buttonRef, handler) {
    useEffect(
        () => {
            const listener = (event) => {
                // Do nothing if clicking ref's element or descendent elements
                if (!ref.current || ref.current.contains(event.target) || (buttonRef && buttonRef.current.contains(event.target))) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },
        // Add ref and handler to effect dependencies
        // It's worth noting that because passed in handler is a new ...
        // ... function on every render that will cause this effect ...
        // ... callback/cleanup to run every render. It's not a big deal ...
        // ... but to optimize you can wrap handler in useCallback before ...
        // ... passing it into this hook.
        [ref, handler]
    );
}

const options = [
    {
        value: 1,
        label: "Class Wise"
    },
    {
        value: 2,
        label: "Admission No"
    }
];
const options1 = [
    {
        value: 1,
        label: "Class "
    },
    {
        value: 2,
        label: "Admission No"
    }
];

const SubHeader = ({ searchState,searchStateonClick, onClick,type, heading, getRecords, buttonAdd, buttonOrders, buttonOption, buttonOrderDragList, formField, searchPlaceholder, rightIcon, inputPlaceholder1, inputLabel1, inputLabel2, inputPlaceholder2, inputLabel3, inputPlaceholder3, inputLabel4, inputPlaceholder4,showHeaderFilter, showSearchButtonRight, showPrimaryButton, showGetRecordButton, headerDescription, textLabel, textPlaceholder, textLabel1, textPlaceholder1, selectLabel1, selectPlaceholder1, selectLabel2, selectPlaceholder2, selectLabel3, selectPlaceholder3, showDateInputField, showTextInput, showTextInput1, showSelectInput1, showSelectInput2, showSelectInput3, leftIcon, buttonManageText, buttonManageMaintenance, formManageClick, formMaintenanceClick, showReceiveHeaderFilter, showReceiveHeaderFilter1, href, showDisabledInput, disabled, textLabelDisabled, textPlaceholderDisabled ,textLabelDisabled1, textPlaceholderDisabled1,textLabelDisabled2, textPlaceholderDisabled2, showHeaderFilterDate, showDefaultHeaderSelect, defaultHeaderPlaceholder, defaultHeaderLabel, showHeaderFilterReturn, showDefaultHeaderSelect1,showDefaultHeaderSelect2,defaultHeaderLabel2,defaultHeaderPlaceholder2}) => {

    const [showAssociateDrop, setShowAssociateDrop] = useState(false);

    const [showDependentDrop, setShowDependentDrop] = useState();

    const ref = useRef();
    const buttonRef = useRef();

    useOnClickOutside(ref, buttonRef, () => setShowAssociateDrop(false));

    const [showDateInput, setShowDateInput] = useState(true);
    const [selectedDate, setSelectedDate] = useState(null);
    const [searchData, setSearch] = useState('');
    const dateLabel = 'Date';
    const datePlaceholder = 'MM/dd/yyyy';
    
    // Function to handle date selection
    const handleDateSelect = (date) => {
      setSelectedDate(date); // Update the selected date in the state
    };

    const handleInputChange = useCallback(event => {
        searchState(event.target.value);
    }, [searchState]);
    // const searchinfo = (info) => {
    //     setSearchinfo(info);
    // }
    // Custom input component with the calendar image inside
    const CustomDatePickerInput = ({ value, onClick }) => (
    <div style={{ position: 'relative' }}>
    <input
        type="text"
        value={value}
        placeholder={datePlaceholder}
        onClick={onClick}
        readOnly 
        style={{ 
            paddingRight: '30px', 
            borderRadius: '3px',
            border: '1px solid rgba(9, 30, 66, 0.141176)',
            height: '32px',
            width: '226px',
            fontSize: '14px',
            padding: '0 10px' 
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
    

    if (type === 'horizontal') {
        return (
            <Container type='horizontal'>
                <ContainerLeft>
                    <Headings heading={heading} />
                </ContainerLeft>
                <ContainerRight >
                
                    <ButtonContainer>
                        <Input
                            leftIcon={SearchIcon}
                            placeholder={searchPlaceholder}
                            name='search'
                            onChange={e => handleInputChange(e)}
                        />
                    </ButtonContainer>  
                
                    <ButtonContainer>
                        <Button
                            className='primary'
                            buttonText={buttonAdd}
                            onClick={onClick}
                            href={href}
                        />
                    </ButtonContainer>
                    {buttonOrders &&
                        <ButtonContainer>
                            <Button
                                className='secondary'
                                buttonText={buttonOrders}
                                onClick={buttonOrderDragList}
                                leftIcon={leftIcon}
                            />
                        </ButtonContainer>
                    }
                    {buttonOption &&
                        <ButtonContainer>
                            <div ref={buttonRef}>
                                <Button
                                    className='secondary'
                                    buttonText={buttonOption || 'Associated Options'}
                                    rightIcon={Icon}
                                    onClick={() => setShowAssociateDrop(!showAssociateDrop)}
                                />
                            </div>
                            {/* Associate Drop Down */}
                            {showAssociateDrop &&
                                <DropContianer ref={ref}>
                                    <CustomDrop 
                                    type='associatedoptions' 
                                    formFiledClick={formField}
                                    formManageClick={formManageClick}
                                    formMaintenanceClick={formMaintenanceClick}
                                    buttonManageText={buttonManageText}
                                    buttonManageMaintenance={buttonManageMaintenance}
                                    />
                                </DropContianer>
                            }
                        </ButtonContainer>
                    }
                </ContainerRight>
            </Container>
        )
    } else if (type === 'vertical') {
        return (
            <VerticalContainer>
                <ContainerLeft>
                    <Headings heading={heading} />
                </ContainerLeft>
                <DescriptionText>
                    <Headings
                        description={headerDescription}
                    />
                </DescriptionText>
                <GetRecordsContainer>
                {showDisabledInput && 
                    <RecordBox>
                        <Input
                            disabled={disabled}
                            label={textLabelDisabled}
                            placeholder={textPlaceholderDisabled}
                            onChange={(e) => {
                                // console.log(e[0].label)
                                setShowDependentDrop(e[0].label)
                            }}
                        />
                    </RecordBox>
                }
                {showDateInputField && 
                    <RecordBox>
                        <CustomDateInput
                        width='280px'
                        />
                    </RecordBox>
                }
                {showSelectInput1 && 
                    <RecordBox>
                        <Input
                            width='280px'
                            type='select'
                            label={selectLabel1}
                            placeholder={selectPlaceholder1}
                            options={options}
                            onChange={(e) => {
                                console.log(e[0].label)
                                setShowDependentDrop(e[0].label)
                            }}
                        />
                    </RecordBox>
                }
                {showDisabledInput && 
                    <RecordBox>
                        <Input
                            disabled={disabled}
                            label={textLabelDisabled1}
                            placeholder={textPlaceholderDisabled1}
                            onChange={(e) => {
                                console.log(e[0].label)
                                setShowDependentDrop(e[0].label)
                            }}
                        />
                    </RecordBox>
                }
                {showDisabledInput && 
                    <RecordBox>
                        <Input
                            disabled={disabled}
                            label={textLabelDisabled2}
                            placeholder={textPlaceholderDisabled2}
                            onChange={(e) => {
                                console.log(e[0].label)
                                setShowDependentDrop(e[0].label)
                            }}
                        />
                    </RecordBox>
                }
                {showSelectInput2 && 
                    <RecordBox>
                        <Input
                            type='select'
                            label={selectLabel2}
                            placeholder={selectPlaceholder2}
                            options={options}
                            onChange={(e) => {
                                console.log(e[0].label)
                                setShowDependentDrop(e[0].label)
                            }}
                        />
                    </RecordBox>
                }
                {showSelectInput3 && 
                    <RecordBox>
                        <Input
                            type='select'
                            label={selectLabel3}
                            placeholder={selectPlaceholder3}
                            options={options}
                            onChange={(e) => {
                                console.log(e[0].label)
                                setShowDependentDrop(e[0].label)
                            }}
                        />
                    </RecordBox>
                }
                {showTextInput && 
                    <RecordBox>
                        <Input
                            type='text'
                            label={textLabel}
                            placeholder={textPlaceholder}
                            onChange={(e) => {
                                console.log(e[0].label)
                                setShowDependentDrop(e[0].label)
                            }}
                        />
                    </RecordBox>
                }
                {showTextInput1 && 
                    <RecordBox>
                        <Input
                            type='text'
                            label={textLabel1}
                            placeholder={textPlaceholder1}
                            onChange={(e) => {
                                console.log(e[0].label)
                                setShowDependentDrop(e[0].label)
                            }}
                        />
                    </RecordBox>
                }
                    {showDependentDrop === "Class Wise" &&
                        <RecordBox>
                            <Input
                                type='select'
                                label='Class Wise'
                                placeholder={'Mapping Type'}
                                options={options1}
                                onChange={() => {

                                }}
                            />
                        </RecordBox>
                    }
                    {showDependentDrop === "Admission No" &&
                        <RecordBox>
                            <Input
                                type='text'
                                label='Admission No'
                                placeholder={'Admission no'}
                            />
                        </RecordBox>
                    }
                    {showGetRecordButton &&
                    <Button
                        className='primary'
                        buttonText="Get Records"
                        onClick={getRecords}
                    />
                    }
                </GetRecordsContainer>
            </VerticalContainer>
        )
    }

    else if (type === 'header-filters') {
        return (
            <>
                <Container>
                    <ContainerLeft>
                        <Headings heading={heading} />
                    </ContainerLeft>
                    <DescriptionText>
                    <Headings
                        description={headerDescription}
                    />
                    </DescriptionText>
                    <ContainerRight>
                    {showSearchButtonRight &&
                        <ButtonContainer>
                            <Input
                                leftIcon={SearchIcon}
                                placeholder={searchPlaceholder}
                                name='search'
                            />
                        </ButtonContainer>    
                    }
                    {showPrimaryButton && 
                        <ButtonContainer>
                            <Button
                                className='primary'
                                buttonText={buttonAdd}
                                onClick={onClick}
                                href={href}
                            />
                        </ButtonContainer>
                    }
                        {buttonOrders &&
                            <ButtonContainer>
                                <Button
                                    className='secondary'
                                    buttonText={buttonOrders}
                                    onClick={buttonOrderDragList}
                                />
                            </ButtonContainer>
                        }
                        {buttonOption &&
                            <ButtonContainer>
                                <div ref={buttonRef}>
                                    <Button
                                        className='secondary'
                                        buttonText={buttonOption || 'Associated Options'}
                                        rightIcon={Icon}
                                        onClick={() => setShowAssociateDrop(!showAssociateDrop)}
                                    />
                                </div>
                                {/* Associate Drop Down */}
                                {showAssociateDrop &&
                                    <DropContianer ref={ref}>
                                        <CustomDrop type='associatedoptions' formFiledClick={formField} />
                                    </DropContianer>
                                }
                            </ButtonContainer>
                        }
                    </ContainerRight>
                </Container>
                <HeaderFilterHeadings>
                <VerticalContainer>
                    <GetRecordsContainer>
                    {showHeaderFilterDate &&
                    <RecordBox>
                            <CustomDateInput
                            width='280px'
                            />
                        </RecordBox>
                    }
                        {showHeaderFilter &&
                        <RecordBox>
                            <CustomDateInput
                            width='250px'
                            />
                        </RecordBox>
                        }
                        {showHeaderFilterReturn &&
                        <RecordBox>
                            <Input
                                width='280px'
                                label={inputLabel1}
                                type='text'
                                placeholder={inputPlaceholder1}
                                options={options}
                                onChange={(e) => {
                                    console.log(e[0].label)
                                    setShowDependentDrop(e[0].label)
                                }}
                            />
                        </RecordBox>
                        }
                        {showDefaultHeaderSelect2 &&
                        <RecordBox>
                            <MultiSelectDropDown
                            width='250px'
                            label={defaultHeaderLabel2}
                            placeholder={defaultHeaderPlaceholder2}
                            />
                        </RecordBox>
                        }
                        {showDefaultHeaderSelect &&
                        <RecordBox>
                            <MultiSelectDropDown
                            width='250px'
                            label={defaultHeaderLabel}
                            placeholder={defaultHeaderPlaceholder}
                            />
                        </RecordBox>
                        }
                        {showDefaultHeaderSelect1 &&
                        <RecordBox>
                            <Input
                                width='250px'
                                label={inputLabel2}
                                type='text'
                                placeholder={inputPlaceholder2}
                                options={options}
                                onChange={(e) => {
                                    console.log(e[0].label)
                                    setShowDependentDrop(e[0].label)
                                }}
                            />
                        </RecordBox>
                        }
                        {showReceiveHeaderFilter &&
                        <RecordBox>
                            <Input
                                label={inputLabel3}
                                type='text'
                                placeholder={inputPlaceholder3}
                            />
                        </RecordBox>
                        }
                        {showReceiveHeaderFilter1 &&
                        <RecordBox>
                            <Input
                                label={inputLabel4}
                                type='text'
                                placeholder={inputPlaceholder4}
                            />
                        </RecordBox>
                        }
                        {showDependentDrop === "Store 1" &&
                            <RecordBox>
                                <Input
                                    type='select'
                                    placeholder={'Store 2'}
                                    options={options1}
                                    onChange={() => {

                                    }}
                                />
                            </RecordBox>
                        }
                        {showDependentDrop === "Store 2" &&
                            <RecordBox>
                                <Input
                                    type='text'
                                    placeholder={'Store 2'}
                                />
                            </RecordBox>
                        }
                        {showGetRecordButton &&
                        <Button
                        className='primary'
                        buttonText="Get Records"
                        onClick={getRecords}
                        />
                        }
                    </GetRecordsContainer>
                </VerticalContainer>
                </HeaderFilterHeadings>
            </>
        )
    }

}

export default SubHeader;