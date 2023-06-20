import React from 'react';
import { SelectBoxContainer, TableBody, TableContainer, TableHead, TableHeading, TableRow, Tabledata } from './TableStyles';
import CustomSelect from '../Inputs/CustomSelect';

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
                                <CustomSelect />
                            </SelectBoxContainer>
                        </Tabledata>
                        <Tabledata>
                            <SelectBoxContainer>
                                <CustomSelect />
                            </SelectBoxContainer>
                        </Tabledata>
                    </TableRow>
                    <TableRow>
                        <Tabledata>1</Tabledata>
                        <Tabledata>Sector 17, Chandigarh</Tabledata>
                        <Tabledata>
                            <SelectBoxContainer>
                                <CustomSelect />
                            </SelectBoxContainer>
                        </Tabledata>
                        <Tabledata>
                            <SelectBoxContainer>
                                <CustomSelect />
                            </SelectBoxContainer>
                        </Tabledata>
                    </TableRow>
                    <TableRow>
                        <Tabledata>1</Tabledata>
                        <Tabledata>Sector 17, Chandigarh</Tabledata>
                        <Tabledata>
                            <SelectBoxContainer>
                                <CustomSelect />
                            </SelectBoxContainer>
                        </Tabledata>
                        <Tabledata>
                            <SelectBoxContainer>
                                <CustomSelect />
                            </SelectBoxContainer>
                        </Tabledata>
                    </TableRow>
                </TableBody>
            </TableContainer>
        </>
    );
}

export default PickDropTimeTable;