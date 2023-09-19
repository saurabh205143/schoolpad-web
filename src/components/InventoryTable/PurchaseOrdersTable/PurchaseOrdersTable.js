import React, { useState, useMemo } from 'react';
import data from './data.json';
import { ActionsConatiner, ActionsList, TableBody, TableContainer, TableHead, TableHeading, TableRow, Tabledata } from '../../Table/TableStyles';
import LinkButton from '../../Buttons/LinkButton';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

// Assets
import EditIcon from '../../../images/edit-icon.svg';
import DeleteIcon from '../../../images/delete-icon.svg';
import AddCategories from '../../../views/main/InventoryModule/ManageCategories/components/AddCategories';
import DeleteRouteModal from '../../../views/main/TransportModule/TransportRoute/components/DeleteRouteModal/DeleteRouteModal';
import Pagination from '../../Pagination/Pagination';
import TableStylesStatus from '../../Table copy/TableStyles';
import Button from '../../Buttons/Button';

let PageSize = 10;

const PurchaseOrdersTable = ({ onClick, record, searchinfo,purchaseOrderList, searchState, storeList}) => {
    console.log({storeList});
    let columnHeading = record.columns;
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [Count, setCount] = useState(0);
    const hideDeleteModal = () => {
        setShowDeleteModal(false);
    }

    const hideModal = () => {
        setShowModal(false);
    }

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);


    //pagination code
    const getCurrentPage = (page) => {
    
        console.log({page});
        const cPage = (page == undefined) ? 1 : page;
        const counter = (cPage - 1) * PageSize;
        setCount(counter);
    
      }

    // get table column

    const column = Object.keys(data[0]);
    const ThDatas = () => {
        return Array.isArray(columnHeading)?record.columns.map((data) => {
            return <TableHeading key={data.field}>{data.label}</TableHeading>
        }):null;
    }

    // const ThData = () => {
    //     return column.map((data) => {
    //         return <TableHeading key={data}>{data.split(/(?=[A-Z])/).join(" ")}</TableHeading>
    //     })
    // }

    return (
        <>
            <TableContainer>
                <TableHead>
                    <TableRow>
                        <TableHeading>S No.</TableHeading>
                        {ThDatas()}
                        <TableHeading>Status</TableHeading>
                        <TableHeading className='table-action-heading'>Actions</TableHeading>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Array.isArray(record.rows)?record.rows.map((item, i) => {
                        const rowNumber = i + Count + 1;
                        return (
                            <TableRow>
                                <Tabledata>{rowNumber}</Tabledata>
                                <Tabledata>{item.purchaseOrderNo}</Tabledata>
                                <Tabledata>{item.departmentName}</Tabledata>
                                <Tabledata>{item.createdDateTime}</Tabledata>
                                <Tabledata>
                                    <TableStylesStatus 
                                    type={item.status}
                                    statusType={item.status.toUpperCase()}>
                                    </TableStylesStatus>
                                </Tabledata>
                                <Tabledata>
                                    <ActionsConatiner>
                                        <ActionsList>
                                            <LinkButton
                                                onlyIcon={EditIcon}
                                                tooltiptext='Edit'
                                                to='/inventory/purchaseAdd'
                                            />
                                        </ActionsList>
                                        <ActionsList>
                                            <LinkButton
                                                onlyIcon={DeleteIcon}
                                                tooltiptext='Delete'
                                                onClick={() => setShowDeleteModal(!showModal)}
                                            />
                                        </ActionsList>
                                        <ActionsList>
                                            <DropdownButton id="dropdown-basic-button" title="More" className='more-options'>
                                                <Dropdown.Item href="#/action-1">
                                                    <Button
                                                        buttonText='Attach File'
                                                        className='link-button'

                                                    /></Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">
                                                    <Button
                                                        buttonText='Print PO'
                                                        className='link-button'
                                                    />
                                                </Dropdown.Item>
                                            </DropdownButton>
                                        </ActionsList>
                                    </ActionsConatiner>
                                </Tabledata>
                            </TableRow>
                        );
                    }):null}
                </TableBody>
            </TableContainer>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={(record.total)?record.total:0}
                pageSize={PageSize}
                // onPageChange={page => setCurrentPage(page)}
                onPageChange={(page) => { purchaseOrderList(page - 1, PageSize); getCurrentPage(page); }}
            />

            {/* Edit Categories Modal */}
            <AddCategories
                show={showModal}
                handleClose={hideModal}
            />

            <DeleteRouteModal
                show={showDeleteModal}
                handleClose={hideDeleteModal}
            />
        </>
    );
}

export default PurchaseOrdersTable;