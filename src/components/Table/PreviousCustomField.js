import React, { useState } from 'react';
import { ActionsConatiner, ActionsList, TableBody, TableContainer, TableHead, TableHeading, TableRow, Tabledata } from './TableStyles';
import LinkButton from '../Buttons/LinkButton';

// Assets
import EditIcon from '../../images/edit-icon.svg';
import DeleteIcon from '../../images/delete-icon.svg';
import { ModalBodyConatiner } from '../../views/main/TransportModule/TransportRoute/components/AddRouteStyles';
import Modal from '../Modal/Modal';
import DeleteModal from '../Modal/DeleteModal';
import TableData from '../Table/CustomFieldData';

const PreviousCustomField = (props) => {

  const [deleteModal, setDeleteModal] = useState(false);

  const hideDeleteModal = () => {
    setDeleteModal(false);
  }

  // get table column
  const column = Object.keys(TableData[0]);
  // get table heading data
  const ThData = () => {
      return column.map((data) => {
          return <TableHeading key={data}>{data}</TableHeading>
      })
  }
// get table row data
const tdData = () => {

  return TableData.map((data) => {
      return (
          <TableRow>
              {
                  column.map((v) => {
                      return <Tabledata>{data[v]}</Tabledata>
                  })
              }
              <Tabledata>
                <ActionsConatiner>
                  <ActionsList>
                    <LinkButton
                      onlyIcon={EditIcon}
                      tooltiptext='Edit'
                      onClick={() => {props.initTabKey(data['SNo'],"one")}}
                    />
                  </ActionsList>
                  <ActionsList>
                    <LinkButton
                      onlyIcon={DeleteIcon}
                      tooltiptext='Delete'
                      onClick={() => setDeleteModal(!deleteModal) }
                    />
                  </ActionsList>
                </ActionsConatiner>
              </Tabledata>
          </TableRow>
      )
  })
}
  return (
    <>
    <ModalBodyConatiner>
      <TableContainer className="table">
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
     
     {/* Delete Modal */}
     <DeleteModal
            show={deleteModal}
            handleClose={hideDeleteModal}
            modalHeading={'Delete Custom Fields'}
            submitText='Yes, delete it'
            cancelText='No, do not delete it'
            // onDelete={onDelete}
            description={`You're about to delete the custom field. Doing this means you will no longer be able to restore this stop. Are you sure you want to delete it?`}
        />
    </>
  );
}

export default PreviousCustomField;