import React, { useState, useMemo } from 'react';
import data from './data.json';
import { ActionsConatiner, ActionsList, Container, TableBody, TableContainer, TableHead, TableHeading, TableRow, Tabledata } from '../Table/TableStyles';
import LinkButton from '../Buttons/LinkButton';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

// Assets
import EditIcon from '../../images/edit-icon.svg';
import DeleteIcon from '../../images/delete-icon.svg';
import Button from '../Buttons/Button';
import AddRoutes from '../../views/main/TransportModule/TransportRoute/components/AddRoutes';
import DeleteRouteModal from '../../views/main/TransportModule/TransportRoute/components/DeleteRouteModal/DeleteRouteModal';
import Pagination from '../Pagination/Pagination';

let PageSize = 14;

const ManageStoreTable = ({ onClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

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

  // get table column
  
  const column = Object.keys(data[0]);
  const ThData = () => {
      return column.map((data) => {
          return <TableHeading key={data}>{data}</TableHeading>
      })
  }

  return (
    <>
      <TableContainer>
        <TableHead>
          <TableRow>
            {ThData()}
            <TableHeading>Actions</TableHeading>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentTableData.map(item => {
            return (
              <TableRow>
                <Tabledata>{item.SNo}</Tabledata>
                <Tabledata>{item.StoreName}</Tabledata>
                <Tabledata>{item.StoreDescription}</Tabledata>
                <Tabledata>{item.StoreCode}</Tabledata>
                <Tabledata>{item.Manager}</Tabledata>
                <Tabledata>
                  <ActionsConatiner>
                    <ActionsList>
                      <LinkButton
                        onlyIcon={EditIcon}
                        tooltiptext='Edit'
                        onClick={() => setShowModal(!showModal)}
                      />
                    </ActionsList>
                    <ActionsList>
                      <LinkButton
                        onlyIcon={DeleteIcon}
                        tooltiptext='Delete'
                        onClick={() => setShowDeleteModal(!showModal)} 
                      />
                    </ActionsList>
                  </ActionsConatiner>
                </Tabledata>
              </TableRow>
            );
          })}
        </TableBody>
      </TableContainer>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />

      {/* Edit Route Modal */}
      <AddRoutes
        show={showModal}
        handleClose={hideModal}
      />

      {/* Delete Modal */}
      <DeleteRouteModal
        show={showDeleteModal}
        handleClose={hideDeleteModal}
      />
    </>
  );
}

export default ManageStoreTable;