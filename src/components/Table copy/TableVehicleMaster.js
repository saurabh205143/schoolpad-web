import React, { useState, useMemo } from 'react';
import data from './data.json';
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
import FuelEntry from '../../views/main/TransportModule/TransportVehicle/components/More Actions/FuelEntry';
import MaintenanceEntry from '../../views/main/TransportModule/TransportVehicle/components/More Actions/MaintenanceEntry';
import DailyLog from '../../views/main/TransportModule/TransportVehicle/components/More Actions/DailyLog';
import InsuranceReminder from '../../views/main/TransportModule/TransportVehicle/components/More Actions/InsuranceReminder';
import TableStylesStatus from './TableStyles';


const TableVehicleMaster = ({ onClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showFuelEntryModal, setShowFuelEntryModal] = useState(false);
  const [showMaintenanceEntryModal, setShowMaintenanceEntryModal] = useState(false);
  const [showDailyLogModal, setShowDailyLogModal] = useState(false);
  const [showInsuranceReminderModal, setShowInsuranceReminderModal] = useState(false);

  const hideDeleteModal = () => {
    setShowDeleteModal(false);
  }

  const hideModal = () => {
    setShowModal(false);
  }

  const hideFuelEntryModal = () => {
    setShowFuelEntryModal(false);
  }

  const hideMaintenanceEntryModal = () => {
    setShowMaintenanceEntryModal(false);
  }

  const hideDailyLogModal = () => {
    setShowDailyLogModal(false);
  }

  const hideInsuranceReminderModal = () => {
    setShowInsuranceReminderModal(false);
  }

  const currentTableData = useMemo(() => {
    return data.slice();
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
            Status
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
                <Tabledata>{item.VehicleNumber}</Tabledata>
                <Tabledata>{item.VehicleCapacity}</Tabledata>
                <Tabledata>{item.SerialNumber}</Tabledata>
                <Tabledata>
                <ActionsConatiner>
                    <ActionsList>
                <TableStylesStatus 
                    type='item-type-returnable'
                    statusType='IN SERVICE'
                >
                </TableStylesStatus>
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
                        <Dropdown.Item href="#/action-1">
                          <Button
                              buttonText='Fuel Entry'
                              className='link-button'
                              onClick={() => setShowFuelEntryModal(!showFuelEntryModal)} 
                      /></Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                        <Button
                              buttonText='Maintenance Entry'
                              className='link-button'
                              onClick={() => setShowMaintenanceEntryModal(!showMaintenanceEntryModal)} 
                      /></Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          <Button
                              buttonText='Daily Log'
                              className='link-button'
                              onClick={() => setShowDailyLogModal(!showDailyLogModal)} 
                      /></Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                        <Button
                              buttonText='Insurance Reminder'
                              className='link-button'
                              onClick={() => setShowInsuranceReminderModal(!showInsuranceReminderModal)} 
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

      {/* More Actions Tab - Modals  */}
      {/* Fuel Entry - Modal */}
      <FuelEntry
          show={showFuelEntryModal}
          handleClose={hideFuelEntryModal}
      />
      {/* Maintenance Entry - Modal */}
      <MaintenanceEntry
          show={showMaintenanceEntryModal}
          handleClose={hideMaintenanceEntryModal}
      />
      {/* Daily Log - Modal */}
      <DailyLog
          show={showDailyLogModal}
          handleClose={hideDailyLogModal}
      />
      {/* Insurance Reminder - Modal*/}
      <InsuranceReminder
          show={showInsuranceReminderModal}
          handleClose={hideInsuranceReminderModal}
      />
    </>
  );
}

export default TableVehicleMaster;