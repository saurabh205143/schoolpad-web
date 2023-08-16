import React, { useState } from 'react'
import { TableBody, TableContainer, TableHead, TableHeading, Tabledata, TableRow, ContainerTable } from '../../../../../components/Table/TableStyles';
import Input from '../../../../../components/Inputs/Input';
import { Link } from 'react-router-dom';

// Assets
import AddMoreIcon from '../../../../../images/add-more-icon.svg';
import { AddMoreField } from '../../../TransportModule/TransportRoute/components/AddRouteStyles';


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

const AddPurchaseTable = (props) => {

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
                        <TableHeading>Store Name</TableHeading>
                        <TableHeading>Category Name</TableHeading>
                        <TableHeading>Name</TableHeading>
                        <TableHeading>Quantity</TableHeading>
                        <TableHeading>P.Cost</TableHeading>
                        <TableHeading>Rtn/Cns/Non-Cns</TableHeading>
                        <TableHeading>Discount%</TableHeading>
                        <TableHeading>Tax%</TableHeading>
                        <TableHeading>Vendors</TableHeading>
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
                                type="select"
                                options={options}
                                placeholder={'--Select--'}
                                onChange={() => {

                                }}
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
                                type="text"
                                placeholder='Enter discount'
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
                            <Input
                                type="text"
                                placeholder='Enter discount'
                            />
                        </Tabledata>
                        <Tabledata>
                            <Input
                                type="text"
                                placeholder='Enter tax'
                            />
                        </Tabledata>
                        <Tabledata>
                            <Input
                                type="select"
                                placeholder={'--Select--'}
                                options={options}
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
                                type="select"
                                options={options}
                                placeholder={'--Select--'}
                                onChange={() => {

                                }}
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
                                type="text"
                                placeholder='Enter discount'
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
                            <Input
                                type="text"
                                placeholder='Enter discount'
                            />
                        </Tabledata>
                        <Tabledata>
                            <Input
                                type="text"
                                placeholder='Enter tax'
                            />
                        </Tabledata>
                        <Tabledata>
                            <Input
                                type="select"
                                placeholder={'--Select--'}
                                options={options}
                            />
                        </Tabledata>
                    </TableRow>
                </TableBody>

                {/* Add More field button */}
               {/* <AddMoreField>
              <Link onClick={() => addFormFields()}>
                <img src={AddMoreIcon} alt="Icon" />
                <span>Add Another Item</span>
              </Link>
          </AddMoreField> */}
            </TableContainer>
    );
}

export default AddPurchaseTable;