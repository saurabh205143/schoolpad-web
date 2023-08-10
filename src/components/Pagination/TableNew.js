import React, { useState, useMemo } from 'react';
import data from './data.json';
import Pagination from './Pagination';
import { ActionsConatiner, ActionsList, Container, TableActionHeadings, TableBody, TableContainer, TableHead, TableHeading, TableRow, Tabledata } from '../Table/TableStyles';
import LinkButton from '../Buttons/LinkButton';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

// Assets
import EditIcon from '../../images/edit-icon.svg';
import DeleteIcon from '../../images/delete-icon.svg';
import Button from '../Buttons/Button';
import AddRoutes from '../../views/main/TransportModule/TransportRoute/components/AddRoutes';
import DeleteRouteModal from '../../views/main/TransportModule/TransportRoute/components/DeleteRouteModal/DeleteRouteModal';

let PageSize = 14;

const TableNew = ({ onClick }) => {
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
        
          return <TableHeading key={data}>{data.split(/(?=[A-Z])/).join(" ")
        }</TableHeading>
      })
  }

  return (
    <>
      <TableContainer>
        <TableHead>
          <TableRow>
            {ThData()}
            <TableHeading>
            <TableActionHeadings>
                  Set Time
              </TableActionHeadings>
              </TableHeading>
            <TableHeading>
              <TableActionHeadings>
                  Actions
              </TableActionHeadings>
              </TableHeading>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentTableData.map(item => {
            return (
              <TableRow>
                <Tabledata>{item.SNo}</Tabledata>
                <Tabledata>{item.RouteName}</Tabledata>
                <Tabledata>{item.Stops}</Tabledata>
                <Tabledata>{item.VehicleNumber}</Tabledata>
                <Tabledata>{item.VehicleCapacity}</Tabledata>
                <Tabledata>
                  <ActionsConatiner>
                    <ActionsList>
                      <Button
                        buttonText='Pickup/Drop Time'
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
                    <ActionsList>
                      <DropdownButton id="dropdown-basic-button" title="More" className='more-options'>
                        <Dropdown.Item href="#/action-1">Fuel Entry</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Maintenance Entry</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Daily Log</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Insurance Reminder</Dropdown.Item>
                      </DropdownButton>
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

export default TableNew;