import React from 'react';
import { TableBody, TableContainer, TableHead, TableHeading, TableRow, Tabledata, Tabledatatext  } from '../Table/TableStyles';
import Button from '../Buttons/Button';
import AvatarIcon from '../../images/avatar-icon.svg';
import { ModalBodyConatiner } from '../../views/main/TransportModule/TransportRoute/components/AddRouteStyles';
import StopListData from './StudentData';

const StudentList = ({onClick,heading}) => {

    // get table column
    const column = Object.keys(StopListData[0]);
    // get table heading data
    const ThData = () => {
        return column.map((data) => {
            return <TableHeading key={data}>{data}</TableHeading>
        })
    }
    // get table row data
    const tdData = () => {

        return StopListData.map((data) => {
            return (
                <TableRow
                >
                    {
                        column.map((v) => {
                            return <Tabledata>{data[v]}</Tabledata>
                        })
                    }
                    <Tabledata>
                            <Button
                            buttonText='View Details'
                            className='link-button'
                            onClick={onClick}
                            />
                        </Tabledata>
                </TableRow>
            )
        })
    }
    return (
        <>
        <ModalBodyConatiner>
            <TableContainer className='picked-table'>
            <TableHead>
                <TableRow>
                    {ThData()}
                    <TableHeading>Actions</TableHeading>
                </TableRow>
            </TableHead>
            <TableBody>
                {tdData()}
            </TableBody>
            </TableContainer>
            </ModalBodyConatiner>
        </>
    );
}

export default StudentList;