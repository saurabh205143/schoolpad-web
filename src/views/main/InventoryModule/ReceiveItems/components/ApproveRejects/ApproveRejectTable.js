import React from 'react'
import { ApproveContainer, Container, TableBody, TableContainer, TableHead, TableHeading, TableRow, Tabledata } from '../../../../../../components/Table/TableStyles';
import Input from '../../../../../../components/Inputs/Input';


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

const ApproveRejectTable = (props) => {
    return (
        <Container>
            <ApproveContainer>
            <TableContainer>
                <TableHead>
                    <TableRow>
                        <TableHeading>S No.</TableHeading>
                        <TableHeading>Name</TableHeading>
                        <TableHeading>Quantity</TableHeading>
                        <TableHeading>Purchase Cost</TableHeading>
                        <TableHeading>Selling Price</TableHeading>
                        <TableHeading>Discount %</TableHeading>
                        <TableHeading>Tax %</TableHeading>
                        <TableHeading>Vendors</TableHeading>
                        <TableHeading>Make</TableHeading>
                        <TableHeading>Total</TableHeading>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <Tabledata>1</Tabledata>
                        <Tabledata>Pencils and Erasers</Tabledata>
                        <Tabledata>
                            <Input
                                type="text"
                                placeholder={'Enter quantity'}
                                onChange={() => {

                                }}
                            />
                        </Tabledata>
                        <Tabledata>
                            <Input
                                type="text"
                                placeholder={'Enter purchase cost'}
                                onChange={() => {

                                }}
                            />
                        </Tabledata>
                        <Tabledata>
                            <Input
                                type="text"
                                placeholder={'Enter selling cost'}
                                onChange={() => {

                                }}
                            />
                        </Tabledata>
                        <Tabledata>
                            <Input
                                type="text"
                                placeholder={'Enter discount'}
                                onChange={() => {

                                }}
                            />
                        </Tabledata>
                        <Tabledata>
                            <Input
                                type="text"
                                placeholder={'Enter tax'}
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
                                placeholder={'Enter make'}
                                onChange={() => {

                                }}
                            />
                        </Tabledata>
                        <Tabledata>
                            <Input
                                type="text"
                                placeholder={'Enter total'}
                                onChange={() => {

                                }}
                            />
                        </Tabledata>
                    </TableRow>
                </TableBody>
            </TableContainer>
            </ApproveContainer>
        </Container>
    );
}

export default ApproveRejectTable;