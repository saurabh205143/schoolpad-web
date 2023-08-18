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


const TableStopMaster = ({  viewList,  heading , EditOnclick,DeleteOnClick }) => {
    const [getStopResponse, setStopResponse] = useState({ data: { column: [], rows: [],totalRecords: "0" } });
    const [count, setCount] = useState(0);
    let PageSize = 15;
    const [currentPage, setCurrentPage] = useState(1);

    /**
     * 
     * Calling APi get Post
     */
    useEffect(() => {
        let offset = (currentPage - 1) * PageSize;
        axios.get(config.baseUrl + 'api-transport/transportStopApiManager/getAllStops/1/1/1/'+PageSize+'/'+offset).then((response) => {
            setStopResponse(response.data);
            console.log(response.data);
            setCount(parseInt(response.data.data.totalRecords));
        }).catch((errorCatch) => {
            console.log(errorCatch);
        });
    }, [currentPage]);
    
    const [showModal, setShowDeleteModal] = useState(false);

    const hideDeleteModal = () => {
        setShowDeleteModal(false);
    }

    /**
     * 
     * Pazination of All Stops
     */
    // get table heading data
    const ThData = () => {
        return getStopResponse.data.column.map((data) => {
            return <TableHeading key={data.field}>{data.name}</TableHeading>
        })
    }
    // get table row data
    const tdData = () => {

        return getStopResponse.data.rows.map((data, index) => {
            return (
                <TableRow key={ index }
                >
                    {
                        getStopResponse.data.column.map((v) => {
                            return <Tabledata key={v.field}>{data[v.field]}</Tabledata>
                        })
                    }
                    <Tabledata>
                        <ActionsConatiner>
                            <ActionsList>
                                <Button
                                    // buttonText='1 Students(s)'
                                    buttonText={`${data.studentCount} Student${data.studentCount !== '1' ? 's' : ''}`}
                                    className='link-button'
                                    onClick={() => { viewList(data['stopId']) }}
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
                                    onClick={() => { EditOnclick(data['stopId'])}}
                                />
                            </ActionsList>
                            <ActionsList>
                                <LinkButton
                                    onlyIcon={DeleteIcon}
                                    tooltiptext='Delete'
                                    onClick={() => {DeleteOnClick(data['stopId'])}}
                                />
                            </ActionsList>
                            {/* <ActionsList>
                                <MoreAction>
                                    <Button
                                        buttonText='More'
                                        rightIcon={DropIcon}
                                        className='link-button'
                                    />
                                </MoreAction>
                            </ActionsList> */}
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
        totalCount={count}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
            />
        </>
    )
}


export default TableStopMaster;