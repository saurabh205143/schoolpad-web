import React from 'react';
import { ActionsConatiner, ActionsList, TableBody, TableContainer, TableHead, TableHeading, TableHeadingModalAction, TableRow, Tabledata } from './TableStyles';
import LinkButton from '../Buttons/LinkButton';

// Assets
import EditIcon from '../../images/edit-icon.svg';
import DeleteIcon from '../../images/delete-icon.svg';
import { ModalBodyConatiner } from '../../views/main/TransportModule/TransportRoute/components/AddRouteStyles';

const PreviousCustomField = (props) => {

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
    </>
  );
}

export default PreviousCustomField;