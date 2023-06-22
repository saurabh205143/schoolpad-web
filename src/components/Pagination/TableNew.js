import React, { useState, useMemo } from 'react';
import data from './data.json';
import Pagination from './Pagination';
import { ActionsConatiner, ActionsList, MoreAction, TableBody, TableContainer, TableHead, TableHeading, TableRow, Tabledata } from '../Table/TableStyles';
import LinkButton from '../Buttons/LinkButton';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

// Assets
import EditIcon from '../../images/edit-icon.svg';
import DeleteIcon from '../../images/delete-icon.svg';
import DropIcon from '../../images/drop-arrow-icon.svg';
import Button from '../Buttons/Button';

let PageSize = 14;

const TableNew = ({ onClick }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
      <TableContainer>
        <TableHead>
          <TableRow>
            <TableHeading>S No.</TableHeading>
            <TableHeading>Route Name</TableHeading>
            <TableHeading>Stops</TableHeading>
            <TableHeading>Vehicle Number</TableHeading>
            <TableHeading>Vehicle Capacity</TableHeading>
            <TableHeading>Set Time</TableHeading>
            <TableHeading>Actions</TableHeading>
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
                      />
                    </ActionsList>
                    <ActionsList>
                      <LinkButton
                        onlyIcon={DeleteIcon}
                      />
                    </ActionsList>
                    <ActionsList>
                      <DropdownButton id="dropdown-basic-button" title="More" className='more-options'>
                        <Dropdown.Item href="#/action-1">Student List</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Print Student</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Add GPS Link</Dropdown.Item>
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
    </>
  );
}

export default TableNew;