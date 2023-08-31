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

const TableNew = ({ onClick,EditOnclick,DeleteOnClick,GpsLink }) => {
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
                  Set Time
              </TableHeading>
            <TableHeading>
                  Actions
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
                        onClick={() => {EditOnclick(data['SNo'])}}
                      />
                    </ActionsList>
                    <ActionsList>
                      <LinkButton
                        onlyIcon={DeleteIcon}
                        tooltiptext='Delete'
                        onClick={() => {DeleteOnClick(data['SNo'])}}
                      />
                    </ActionsList>
                    <ActionsList>
                      <DropdownButton id="dropdown-basic-button" title="More" className='more-options'>
                        <Dropdown.Item href="#/action-1">
                          <Button
                              buttonText='Student List'
                              className='link-button' 
                              
                      /></Dropdown.Item>
                        <Dropdown.Item href="#/action-2"> 
                        <Button
                              buttonText='Print Student'
                              className='link-button' 
                      /></Dropdown.Item>
                        <Dropdown.Item href="#/action-3">   
                        <Button
                              buttonText='Add GPS Link'
                              className='link-button' 
                              onClick={()=> {GpsLink(data['SNo'])}}
                      /></Dropdown.Item>
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