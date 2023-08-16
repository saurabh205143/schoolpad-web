import React, { useState,useEffect,useMemo } from 'react';
import TableData from './TableData';
import axios from 'axios';
import config from '../../config';
import { ActionsConatiner, ActionsList, MoreAction, TableBody, TableContainer, TableHead, TableHeading, TableRow, Tabledata } from './TableStyles';

// Assets
import EditIcon from '../../images/edit-icon.svg';
import DeleteIcon from '../../images/delete-icon.svg';
import LinkButton from '../Buttons/LinkButton';
import DropIcon from '../../images/drop-arrow-icon.svg';
import Button from '../Buttons/Button';
import Pagination from '../Pagination/Pagination';
import DeleteRouteModal from '../../views/main/TransportModule/TransportRoute/components/DeleteRouteModal/DeleteRouteModal';


const TableStopMaster = ({  onClick,  heading , EditOnclick,DeleteOnClick }) => {
    const [getStopResponse, setStopResponse] = useState({ getAllStop: [] });
    const [deleteStopResponse, setdeleteStopResponse] = useState([]);
    let PageSize = 15;
    const [currentPage, setCurrentPage] = useState(0);
    /**
     * 
     * Calling APi get Post
     */
    useEffect(() => {
        axios.get(config.baseUrl + 'api-transport/transportStopApiManager/getAllStops/1/1/1').then((response) => {
            setStopResponse(response.data);
            console.log(response.data);
            setCurrentPage(1)
        }).catch((errorCatch) => {
            console.log(errorCatch);
        });
    }, []);

    /**
     * 
     * DeleteStop Api
     */
    const deleteStop = (stopId) => { 
    /**
     * 
     * Calling APi delete Post
     */
        console.log(stopId)

        axios.delete(config.baseUrl + 'api-transport/transportStopApiManager/delete_stop', {
            stopId: stopId
        }).then((response) => {
            setdeleteStopResponse(response.data);
            console.log(response.data);
        }).catch((errorCatch) => {
            console.log(errorCatch);
        });
    }
    
    const [showModal, setShowDeleteModal] = useState(false);

    const hideDeleteModal = () => {
        setShowDeleteModal(false);
    }

    /**
     * 
     * Pazination of All Stops
     */
    const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return getStopResponse.getAllStop.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
    console.log(currentTableData)
    const column = Object.keys(TableData[0]);
    // get table heading data
    const ThData = () => {
        return column.map((data) => {
            return <TableHeading key={data}>{data}</TableHeading>
        })
    }
    // get table row data
    const tdData = () => {

        return currentTableData.map((data) => {
            return (
                <TableRow
                >
                    {
                        column.map((v) => {
                            return <Tabledata>{data[v]}</Tabledata>
                        })
                    }
                    <Tabledata>
                        <ActionsConatiner>
                            <ActionsList>
                                <Button
                                    // buttonText='1 Students(s)'
                                    buttonText={`${data.studentCount} Student${data.studentCount !== '1' ? 's' : ''}`}
                                    className='link-button'
                                    onClick={onClick}
                                />
                            </ActionsList>

                        </ActionsConatiner>
                    </Tabledata>
                    <Tabledata>
                        <ActionsConatiner>
                            <ActionsList>
                                <LinkButton
                                    onlyIcon={EditIcon}
                                    tooltiptext='Edit'
                                    onClick={() => { EditOnclick(data[' S No.']) }}
                                />
                            </ActionsList>
                            <ActionsList>
                                <LinkButton
                                    onlyIcon={DeleteIcon}
                                    tooltiptext='Delete'
                                    onClick={() => deleteStop(data.StopId)}
                                    onClick={() => {DeleteOnClick(data[' S No.'])}}
                                />
                            </ActionsList>
                            <ActionsList>
                                <MoreAction>
                                    <Button
                                        buttonText='More'
                                        rightIcon={DropIcon}
                                        className='link-button'
                                    />
                                </MoreAction>
                            </ActionsList>
                        </ActionsConatiner>
                    </Tabledata>
                </TableRow>
            )
        })
    }

    

    return (
        <>
        <TableContainer className="table">
            <TableHead>
                <TableRow>
                    {ThData()}
                    <TableHeading
                    >{heading}</TableHeading>
                    <TableHeading>Actions</TableHeading>
                </TableRow>
            </TableHead>
            <TableBody>
                {tdData()}
            </TableBody>
        </TableContainer>
         <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={getStopResponse.getAllStop.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
            />
        </>
    )
}


export default TableStopMaster;