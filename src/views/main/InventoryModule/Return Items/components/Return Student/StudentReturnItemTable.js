import React, { useState, useMemo } from 'react';
import data from './data.json';
import { ActionsConatiner, ActionsList, TableBody, TableContainer, TableHead, TableHeading, TableRow, Tabledata } from '../../../../../../components/Table/TableStyles';
import TableStylesStatus from '../../../../../../components/Table copy/TableStyles';
import Button from '../../../../../../components/Buttons/Button';
import CustomFilter from '../../../Product Report/CustomFilter';
import ReturnItemStaffModal from '../Return Staff/ReturnItemStaffModal';

let PageSize = 2;

const StudentReturnItemTable = ({ onClick }) => {

    const [showReturnModal, setShowReturnmodal] = useState(false);
    const hideModal = () => {
        setShowReturnmodal(false);
    }

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    // get table column
    const column = Object.keys(data[0]);
    const ThData = () => {
        return column.map((data) => {
            return <TableHeading key={data}>{data.split(/(?=[A-Z])/).join(" ")}</TableHeading>
        })
    }

    return (
        <>
            <TableContainer>
                <TableHead>
                    <TableRow>
                        {ThData()}
                        <TableHeading>Amount Status</TableHeading>
                        <TableHeading>Action</TableHeading>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {currentTableData.map(item => {
                        return (
                            <TableRow>
                                <Tabledata>{item.SNo}</Tabledata>
                                <Tabledata>{item.ReceiptNo}</Tabledata>
                                <Tabledata>{item.IssueDate}</Tabledata>
                                <Tabledata>{item.IssueName}</Tabledata>
                                <Tabledata>{item.Quantity}</Tabledata>
                                <Tabledata>{item.Amount}</Tabledata>
                                <Tabledata>
                                    <TableStylesStatus
                                        type='item-type-returnable'
                                        statusType='RETURNABLE'
                                    />
                                </Tabledata>
                                <Tabledata>
                                    <Button
                                        buttonText='Return Product'
                                        className='link-button'
                                        onClick={() => setShowReturnmodal(!showReturnModal)}
                                    />
                                </Tabledata>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </TableContainer>


            {/* Return Item Modal */}

            <ReturnItemStaffModal
                show={showReturnModal}
                handleClose={hideModal}
            />

        </>
    );
}

export default StudentReturnItemTable;