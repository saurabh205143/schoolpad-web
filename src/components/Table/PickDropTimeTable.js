import React from 'react';
import { SelectBoxContainer, TableBody, TableContainer, TableHead, TableHeading, TableRow, Tabledata } from './TableStyles';
import CustomSelect from '../Inputs/CustomSelect';

const options = ["9:00 AM", "9:30 AM", "10:00 AM"];

const PickDropTimeTable = (props) => {

    return (
        <>
            <TableContainer className='picked-table'>
                <TableHead>
                    <TableRow>
                        <TableHeading>S No.</TableHeading>
                        <TableHeading>Stop Name</TableHeading>
                        <TableHeading>Pickup Time</TableHeading>
                        <TableHeading>Drop Time</TableHeading>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <Tabledata>1</Tabledata>
                        <Tabledata>Sector 17, Chandigarh</Tabledata>
                        <Tabledata>
                            <SelectBoxContainer>
                                <CustomSelect options={options} />
                            </SelectBoxContainer>
                        </Tabledata>
                        <Tabledata>
                            <SelectBoxContainer>
                                <CustomSelect options={options}  />
                            </SelectBoxContainer>
                        </Tabledata>
                    </TableRow>
                    <TableRow>
                        <Tabledata>1</Tabledata>
                        <Tabledata>Sector 17, Chandigarh</Tabledata>
                        <Tabledata>
                            <SelectBoxContainer>
                                <CustomSelect options={options}  />
                            </SelectBoxContainer>
                        </Tabledata>
                        <Tabledata>
                            <SelectBoxContainer>
                                <CustomSelect options={options}  />
                            </SelectBoxContainer>
                        </Tabledata>
                    </TableRow>
                    <TableRow>
                        <Tabledata>1</Tabledata>
                        <Tabledata>Sector 17, Chandigarh</Tabledata>
                        <Tabledata>
                            <SelectBoxContainer>
                                <CustomSelect options={options}  />
                            </SelectBoxContainer>
                        </Tabledata>
                        <Tabledata>
                            <SelectBoxContainer>
                                <CustomSelect options={options}  />
                            </SelectBoxContainer>
                        </Tabledata>
                    </TableRow>
                </TableBody>
            </TableContainer>
        </>
    );
}

export default PickDropTimeTable;