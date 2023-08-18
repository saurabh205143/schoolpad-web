import React, { useState,useEffect } from 'react';
import { TableBody, TableContainer, TableHead, TableHeading, TableRow, Tabledata, Tabledatatext  } from '../Table/TableStyles';
import Button from '../Buttons/Button';
import AvatarIcon from '../../images/avatar-icon.svg';
import { ModalBodyConatiner } from '../../views/main/TransportModule/TransportRoute/components/AddRouteStyles';
import StopListData from './StudentData';
import axios from 'axios';
import config from '../../config';

const StudentList = ({onClick,heading,id}) => {
    const [getAllStudentResponse, setAllStudentResponse] = useState({ data: { column: [], rows: [],totalRecords: "0" } });
     /**
     * 
     * Calling APi get
     */
    useEffect(() => {
        let stopId = id;
        console.log(stopId);
        axios.get(config.baseUrl + 'api-transport/transportStopApiManager/getAllStudents/'+stopId+'/8/1/25').then((response) => {
            setAllStudentResponse(response.data);
            console.log(response.data);
        }).catch((errorCatch) => {
            console.log(errorCatch);
        });
    }, [id]);

    // get table column
    // const column = Object.keys(StopListData[0]);
    // get table heading data
    const ThData = () => {
        return getAllStudentResponse.data.column.map((data) => {
            return <TableHeading key={data.field}>{data.name}</TableHeading>
        })
    }
    // get table row data
    const tdData = () => {

        return getAllStudentResponse.data.rows.map((data,index) => {
            return (
                <TableRow key={ index }
                >
                    {
                        getAllStudentResponse.data.column.map((v) => {
                            return <Tabledata key={v.field}>{data[v.field]}</Tabledata>
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