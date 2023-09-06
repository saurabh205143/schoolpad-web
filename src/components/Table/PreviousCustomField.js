import React, { useState } from 'react';
import { ActionsConatiner, ActionsList, TableBody, TableContainer, TableHead, TableHeading, TableHeadingModalAction, TableRow, Tabledata } from './TableStyles';
import LinkButton from '../Buttons/LinkButton';

// Assets
import EditIcon from '../../images/edit-icon.svg';
import DeleteIcon from '../../images/delete-icon.svg';
import { ModalBodyConatiner } from '../../views/main/TransportModule/TransportRoute/components/AddRouteStyles';
import Modal from '../Modal/Modal';
import DeleteModal from '../Modal/DeleteModal';

const PreviousCustomField = (props) => {

  const [deleteModal, setDeleteModal] = useState(false);

  const hideDeleteModal = () => {
    setDeleteModal(false);
  }

  return (
    <>
    <ModalBodyConatiner>
      <TableContainer className='picked-table'>
        <TableHead>
          <TableRow>
            <TableHeading>S No.</TableHeading>
            <TableHeading>Field Name</TableHeading>
            <TableHeading>Field Type</TableHeading>
            <TableHeading>Actions</TableHeading>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <Tabledata>1</Tabledata>
            <Tabledata>Date of Birth</Tabledata>
            <Tabledata>Date Selector</Tabledata>
            <Tabledata>
              <ActionsConatiner>
                <ActionsList>
                  <LinkButton
                    onlyIcon={EditIcon}
                    tooltiptext='Edit'
                     onClick={() => {props.initTabKey('one',1)}}
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
          <TableRow>
            <Tabledata>2</Tabledata>
            <Tabledata>Nationality</Tabledata>
            <Tabledata>
              Dropdown
            </Tabledata>
            <Tabledata>
              <ActionsConatiner>
                <ActionsList>
                  <LinkButton
                    onlyIcon={EditIcon}
                    tooltiptext='Edit'
                  />
                </ActionsList>
                <ActionsList>
                  <LinkButton
                    onlyIcon={DeleteIcon}
                    tooltiptext='Delete'
                  />
                </ActionsList>
              </ActionsConatiner>
            </Tabledata>
          </TableRow>
          <TableRow>
            <Tabledata>3</Tabledata>
            <Tabledata>Blood Group</Tabledata>
            <Tabledata>
              Dropdown
            </Tabledata>
            <Tabledata>
              <ActionsConatiner>
                <ActionsList>
                  <LinkButton
                    onlyIcon={EditIcon}
                    tooltiptext='Edit'
                  />
                </ActionsList>
                <ActionsList>
                  <LinkButton
                    onlyIcon={DeleteIcon}
                    tooltiptext='Delete'
                  />
                </ActionsList>
              </ActionsConatiner>
            </Tabledata>
          </TableRow>
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