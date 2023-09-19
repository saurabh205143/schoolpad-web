import React, { useState } from 'react'
import { TableBody, TableContainer, TableHead, TableHeading, Tabledata, TableRow } from '../../../../../components/Table/TableStyles';
import Input from '../../../../../components/Inputs/Input';

// Assets
import CustomCheckbox from '../../../../../components/Checkbox/CustomCheckbox';

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

const StudentIssueItemTable = (props) => {

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

            </TableContainer>
    );
}

export default StudentIssueItemTable;