import React, { useState } from 'react'
import { TableBody, TableContainer, TableHead, TableHeading, Tabledata, TableRow } from '../../../../../components/Table/TableStyles';
import Input from '../../../../../components/Inputs/Input';
import { Link } from 'react-router-dom';

// Assets
import CustomCheckbox from '../../../../../components/Checkbox/CustomCheckbox';
import { AddMoreField } from '../../../TransportModule/TransportRoute/components/AddRouteStyles';
import AddMoreIcon from '../../../../../images/add-more-icon.svg';
import { AddMoreIssueItem } from './IssueItemHomeStyle';

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

const EmployeeIssueItemTable = (props) => {

  const [isChecked, setIsChecked] = useState(true);

  const handleChange = () => {
    setIsChecked(!isChecked);
};

    const { show, handleClose } = props;
    const [formValues, setFormValues] = useState(
        [
            {
                staff_member: "",
                route_name: "",
                stops: "",
                set_order: "",
                vehicle_number: "",
                vehicle_capacity: "",
                bus_help: "",
            }
        ]
    )

    let addFormFields = () => {
        setFormValues([...formValues, { stops: "", set_order: "" }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }
    return (
            <TableContainer>
                <TableHead>
                    <TableRow>
                        <TableHeading>S No.</TableHeading>
                        <TableHeading>Item Name</TableHeading>
                        <TableHeading>Quantity</TableHeading>
                        <TableHeading>Qty. Left</TableHeading>
                        <TableHeading>Issue Purpose</TableHeading>
                        <TableHeading>S.P.</TableHeading>
                        <TableHeading>Amount</TableHeading>
                        <TableHeading>Amount Paid</TableHeading>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <Tabledata>1</Tabledata>
                        <Tabledata>
                            <Input
                                type="select"
                                options={options}
                                placeholder={'--Select--'}
                                onChange={() => {

                                }}
                            /></Tabledata>
                        <Tabledata>
                        <Input
                                type="text"
                                placeholder='Enter discount'
                            /></Tabledata>
                        <Tabledata>
                            <Input
                                type="select"
                                options={options}
                                placeholder={'--Select--'}
                                onChange={() => {

                                }}
                            />
                        </Tabledata>
                        <Tabledata>
                        <Input
                                type="select"
                                options={options}
                                placeholder={'--Select--'}
                                onChange={() => {

                                }}
                            />
                        </Tabledata>
                        <Tabledata>
                        <Input
                                type="text"
                                placeholder='Enter discount'
                            />
                        </Tabledata>
                        <Tabledata>
                        <Input
                        type="select"
                        placeholder={'--Select--'}
                        options={options}
                    />
                        </Tabledata>
                        <Tabledata>
                            <CustomCheckbox
                                isChecked={isChecked}
                                onChange={handleChange}
                            />
                        </Tabledata>
                    </TableRow>
                    <TableRow>
                        <Tabledata>2</Tabledata>
                        <Tabledata>
                            <Input
                                type="select"
                                options={options}
                                placeholder={'--Select--'}
                                onChange={() => {

                                }}
                            /></Tabledata>
                        <Tabledata>
                        <Input
                                type="text"
                                placeholder='Enter discount'
                            /></Tabledata>
                        <Tabledata>
                            <Input
                                type="select"
                                options={options}
                                placeholder={'--Select--'}
                                onChange={() => {

                                }}
                            />
                        </Tabledata>
                        <Tabledata>
                        <Input
                                type="select"
                                options={options}
                                placeholder={'--Select--'}
                                onChange={() => {

                                }}
                            />
                        </Tabledata>
                        <Tabledata>
                            <Input
                                type="text"
                                placeholder='Enter discount'
                            />
                        </Tabledata>
                        <Tabledata>
                            <Input
                                type="select"
                                placeholder={'--Select--'}
                                options={options}
                            />
                        </Tabledata>
                        <Tabledata>
                        <CustomCheckbox
                                isChecked={isChecked}
                                onChange={handleChange}
                            />
                        </Tabledata>
                    </TableRow>
                </TableBody>
                {/* Add More field button */}
                <AddMoreIssueItem>
                  <AddMoreField>
                  <Link onClick={() => addFormFields()}>
                    <img src={AddMoreIcon} alt="Icon" />
                    <span>Add Another Item</span>
                  </Link>
                  </AddMoreField>
                  </AddMoreIssueItem>
            </TableContainer>
    );
}

export default EmployeeIssueItemTable;