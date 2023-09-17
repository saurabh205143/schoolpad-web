import React, { useEffect, useRef, useState, useCallback } from 'react'
import { ButtonContainer, Container, ContainerLeft, ContainerRight, DescriptionText, GetRecordsContainer, GetRecordsTabHeaderFilter, HeaderFilterHeadings, RecordBox, RecordBoxMulti, RecordBoxNew, TabFilterContainer, TabHeaderFilter, TabHeaderFilterHeading, VerticalContainer } from './subHeaderStyles';
import Headings from '../Headings/Headings';
import Button from '../Buttons/Button';

// Assets
import Icon from '../../images/down-icon.svg';
import SearchIcon from '../../images/search-icon.svg';
import FilterIcon from '../../images/filter.svg';
import Input from '../Inputs/Input';
import { styled } from 'styled-components';
import CustomDrop from '../MainHeader/Components/SubComponents/CustomDrop';
import 'react-datepicker/dist/react-datepicker.css';
import calendarIcon from '../../images/date-icon.svg';
import LinkButton from '../Buttons/LinkButton';
import DateInput from '../DateInputField/DateInput';
import TabHeaderFilterItemReport from '../../views/main/InventoryModule/Product Report/components/TabHeaderFilterProductReport';
import CustomFilter from '../../views/main/InventoryModule/Product Report/CustomFilter';
import MultiSelect from '../Inputs/MultiSelect';

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

const SubHeader = ({ searchState, InputOneState,searchStateonClick, onClick, type, heading, getRecords, buttonAdd, buttonOrders, buttonOption, buttonOrderDragList, formField, searchPlaceholder, rightIcon, inputPlaceholder1, inputLabel1, inputLabel2, widthLabel2, widthLabel3, inputPlaceholder2, inputLabel3, inputPlaceholder3, inputLabel4, inputPlaceholder4, showHeaderFilter, showSearchButtonRight, showPrimaryButton, showGetRecordButton, headerDescription, textLabel, textPlaceholder, textLabel1, textPlaceholder1, selectLabel1, selectPlaceholder1, selectLabel2, selectPlaceholder2, selectLabel3, selectPlaceholder3, selectLabel4, selectPlaceholder4, showDateInputField, showTextInput, showTextInput1, showSelectInput1, showSelectInput2, showSelectInput3, leftIcon, buttonManageText, buttonManageMaintenance, formManageClick, formMaintenanceClick, showReceiveHeaderFilter, showReceiveHeaderFilter1, href, showDisabledInput, disabled, textLabelDisabled, textPlaceholderDisabled, textLabelDisabled1, textPlaceholderDisabled1, textLabelDisabled2, textPlaceholderDisabled2, showHeaderFilterDate, showHeaderFilterFrom, showHeaderFilterTo, showDefaultHeaderSelect, defaultHeaderPlaceholder, defaultHeaderLabel, showHeaderFilterReturn, showDefaultHeaderSelect1, showDefaultHeaderSelect2, defaultHeaderLabel2, defaultHeaderPlaceholder2, buttonChangeHistory, buttonFormFieldText, showLinkButton, linkText, widthDateFrom, widthDateTo, widthSelect, showHeaderFilterRecordBoxNew, inputLabel5, inputPlaceholder5, inputLabel6, inputPlaceholder6, inputLabel7, inputPlaceholder7, inputLabel8, inputPlaceholder8, showSelectRecordBoxNew, showSelectInputHeader, showTabHeaderFilters, showTabSelectInput, showMultiSelectTab1,showMultiSelectTab2, showDateTabFrom, showDateTabTo, multiselectLabel, multiselectPlaceholder, selectLabelTab, selectPlaceholderTab, multiselectLabel1, multiselectPlaceholder1, widthDateLabel1, widthDateLabel2, showTabSelectInput1,selectLabelTab1, selectPlaceholderTab1,getCustomField ,showMultiSelectTab3, multiselectLabel3, multiselectPlaceholder3, showMultiSelectTab4,multiselectPlaceholder4, multiselectLabel4, showTabSelectInput2, selectLabelTab2, selectPlaceholderTab2,showHeaderFilterHeading, paddingContainer}) => {

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
    const handleInputOnechange =  useCallback(event => {
        // console.log(event.target.value);
        InputOneState(event.target.value)
    },[InputOneState]);
    const handleInputChange = useCallback(event => {
        searchState(event.target.value);
    }, [searchState]);
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
            <Container 
            type='horizontal'
            padding={paddingContainer}>
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
                                        buttonChangeHistory={buttonChangeHistory}
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
                    {showDateInputField &&
                        <RecordBox>
                            <DateInput
                                width={widthDateFrom}
                            />
                        </RecordBox>
                    }
                    {showSelectInput1 &&
                        <RecordBox>
                            <Input
                                width={widthSelect}
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
                    {showSelectRecordBoxNew &&
                        <RecordBoxNew>
                            <Input
                                className='select-drop-record-new'
                                width={widthSelect}
                                type='select'
                                label={selectLabel4}
                                placeholder={selectPlaceholder4}
                                options={options}
                                onChange={(e) => {
                                    console.log(e[0].label)
                                    setShowDependentDrop(e[0].label)
                                }}
                            />
                        </RecordBoxNew>
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
                    {showHeaderFilterRecordBoxNew &&
                        <RecordBoxNew>
                            <Input
                                label={inputLabel8}
                                type='text'
                                placeholder={inputPlaceholder8}
                            />
                        </RecordBoxNew>
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
                <Container 
                    padding={paddingContainer}
                >
                    {showHeaderFilterHeading && (
                    <>
                    <ContainerLeft>
                        <Headings heading={heading} />
                    </ContainerLeft>
                    <DescriptionText>
                        <Headings
                            description={headerDescription}
                        />
                    </DescriptionText>
                    </>
                    )}
                    <ContainerRight>
                        {showSearchButtonRight &&
                            <ButtonContainer>
                                <Input
                                    leftIcon={SearchIcon}
                                    placeholder={searchPlaceholder}
                                    name='search'
                                onChange={e => handleInputChange(e)}
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
                        {showLinkButton &&
                            <ButtonContainer>
                                <LinkButton
                                    backgroundColor='#0C66E4'
                                    padding='0px 12px'
                                    linkText={linkText}
                                    to='/inventory/purchaseAdd'
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
                                        <CustomDrop
                                            type='associatedoptions'
                                            formFiledClick={formField}
                                            buttonManageText={buttonManageText}
                                            buttonFormFieldText={buttonFormFieldText}
                                            buttonManageMaintenance={buttonManageMaintenance}
                                            buttonChangeHistory={buttonChangeHistory}
                                        />
                                    </DropContianer>
                                }
                            </ButtonContainer>
                        }
                    </ContainerRight>
                </Container>

                {/* Tab Header Filters */}
                {showTabHeaderFilters &&
                    <TabHeaderFilterItemReport />
                }
                <HeaderFilterHeadings>
                    <VerticalContainer>
                        <GetRecordsContainer>
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
                            {showHeaderFilterDate &&
                                <RecordBox>
                                    <DateInput
                                        width={widthDateFrom}
                                        dateLabelField='Issue Date'
                                    />
                                </RecordBox>
                            }
                            {showHeaderFilterFrom &&
                                <RecordBox>
                                    <DateInput
                                        width={widthDateFrom}
                                        dateLabelField='From'
                                    />
                                </RecordBox>
                            }
                            {showHeaderFilterTo &&
                                <RecordBox>
                                    <DateInput
                                        width={widthDateTo}
                                        dateLabelField='To'
                                    />
                                </RecordBox>
                            }
                            {showSelectInputHeader &&
                                <RecordBox>
                                    <Input
                                        width={widthSelect}
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
                            {showHeaderFilterReturn &&
                                <RecordBox>
                                    <Input
                                        label={inputLabel1}
                                        type='text'
                                        placeholder={inputPlaceholder1}
                                        options={options}
                                        onChange={(e) => { handleInputOnechange(e);
                                            // setShowDependentDrop(e[0].label)
                                        }}
                                    />
                                </RecordBox>
                            }
                            {showDefaultHeaderSelect2 &&
                                <RecordBox>
                                    <MultiSelect
                                        width="250px"
                                        label={defaultHeaderLabel2}
                                        placeholder={defaultHeaderPlaceholder2}
                                    />
                                </RecordBox>
                            }
                            {showDefaultHeaderSelect &&
                                <RecordBox>
                                    <MultiSelect
                                        width="250px"
                                        label={defaultHeaderLabel}
                                        placeholder={defaultHeaderPlaceholder}
                                    />
                                </RecordBox>
                            }
                            {showDefaultHeaderSelect1 &&
                                <RecordBox>
                                    <Input
                                        width={widthLabel2}
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
                                        width={widthLabel3}
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
                            {showHeaderFilterRecordBoxNew &&
                                <RecordBoxNew>
                                    <Input
                                        label={inputLabel5}
                                        type='text'
                                        placeholder={inputPlaceholder5}
                                    />
                                </RecordBoxNew>
                            }
                            {showHeaderFilterRecordBoxNew &&
                                <RecordBoxNew>
                                    <Input
                                        label={inputLabel6}
                                        type='text'
                                        placeholder={inputPlaceholder6}
                                    />
                                </RecordBoxNew>
                            }
                            {showHeaderFilterRecordBoxNew &&
                                <RecordBoxNew>
                                    <Input
                                        label={inputLabel7}
                                        type='text'
                                        placeholder={inputPlaceholder7}
                                    />
                                </RecordBoxNew>
                            }
                            {showHeaderFilterRecordBoxNew &&
                                <RecordBoxNew>
                                    <Input
                                        label={inputLabel8}
                                        type='text'
                                        placeholder={inputPlaceholder8}
                                    />
                                </RecordBoxNew>
                            }
                            {showSelectInput1 &&
                                <RecordBox>
                                    <Input
                                        width={widthSelect}
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

    else if (type === 'tab-header-filter') {
        return (
            <>
                <TabHeaderFilterHeading>
                    <Headings heading={heading} />
                </TabHeaderFilterHeading>
                <TabFilterContainer>
                {showMultiSelectTab3 &&
                        <RecordBoxNew>
                            <MultiSelect
                                label={multiselectLabel3}
                                placeholder={multiselectPlaceholder3}
                            />
                        </RecordBoxNew>
                    }
                    {showTabSelectInput &&
                        <RecordBoxNew>
                            <Input
                                type='select'
                                label={selectLabelTab}
                                placeholder={selectPlaceholderTab}
                                options={options}
                                onChange={(e) => {
                                    console.log(e[0].label)
                                    setShowDependentDrop(e[0].label)
                                }}
                            />
                        </RecordBoxNew>
                    }
                    {showTabSelectInput1 &&
                        <RecordBoxNew>
                            <Input
                                type='select'
                                label={selectLabelTab1}
                                placeholder={selectPlaceholderTab1}
                                options={options}
                                onChange={(e) => {
                                    console.log(e[0].label)
                                    setShowDependentDrop(e[0].label)
                                }}
                            />
                        </RecordBoxNew>
                    }
                    {showMultiSelectTab1 &&
                        <RecordBoxNew>
                            <MultiSelect
                                label={multiselectLabel}
                                placeholder={multiselectPlaceholder}
                            />
                        </RecordBoxNew>
                    }
                    {showMultiSelectTab2 &&
                        <RecordBoxNew>
                            <MultiSelect
                                label={multiselectLabel1}
                                placeholder={multiselectPlaceholder1}
                            />
                        </RecordBoxNew>
                    }
                    {showTabSelectInput2 &&
                        <RecordBoxNew>
                            <Input
                                type='select'
                                label={selectLabelTab2}
                                placeholder={selectPlaceholderTab2}
                                options={options}
                                onChange={(e) => {
                                    console.log(e[0].label)
                                    setShowDependentDrop(e[0].label)
                                }}
                            />
                        </RecordBoxNew>
                    }
                    {showDateTabFrom &&
                        <RecordBoxNew>
                            <DateInput
                                width={widthDateFrom}
                                dateLabelField={widthDateLabel1}
                            />
                        </RecordBoxNew>
                    }
                    {showDateTabTo &&
                        <RecordBox>
                            <DateInput
                                width={widthDateTo}
                                dateLabelField={widthDateLabel2}
                            />
                        </RecordBox>
                    }
                    {showMultiSelectTab4 &&
                        <RecordBoxNew>
                            <MultiSelect
                                label={multiselectLabel4}
                                placeholder={multiselectPlaceholder4}
                            />
                        </RecordBoxNew>
                    }
                    {showDependentDrop === "Class Wise" &&
                        <RecordBoxNew>
                            <Input
                                type='select'
                                label='Class Wise'
                                placeholder={'Mapping Type'}
                                options={options1}
                                onChange={() => {

                                }}
                            />
                        </RecordBoxNew>
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
                    {buttonOption &&
                        <ButtonContainer>
                            <div ref={buttonRef}>
                                <Button
                                        className='secondary'
                                        buttonText={'Custom Filters'}
                                        leftIcon={FilterIcon}
                                        onClick={getCustomField}
                                />
                                </div>
                            </ButtonContainer>
                    }
                    {showGetRecordButton &&
                        <Button
                            className='primary'
                            buttonText="Get Records"
                            onClick={getRecords}
                        />
                    }
                </TabFilterContainer>
            </>
        )
    }
}

export default SubHeader;