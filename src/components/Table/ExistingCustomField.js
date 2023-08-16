import React from 'react';
import { ActionsConatiner, ActionsList, TableBody, TableContainer, TableHead, TableHeading, TableHeadingModalAction, TableRow, Tabledata } from './TableStyles';
import LinkButton from '../Buttons/LinkButton';

// Assets
import EditIcon from '../../images/edit-icon.svg';
import DeleteIcon from '../../images/delete-icon.svg';
import { ModalBodyConatiner } from '../../views/main/TransportModule/TransportRoute/components/AddRouteStyles';

const ExistingCustomField = (props) => {

  return (
    <>
    <ModalBodyConatiner>
      <TableContainer className='picked-table'>
        <TableHead>
          <TableRow>
            <TableHeading>S No.</TableHeading>
            <TableHeading>Fuel Pump Name</TableHeading>
            <TableHeading>
              <TableHeadingModalAction>Actions</TableHeadingModalAction>
              </TableHeading>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <Tabledata>1</Tabledata>
            <Tabledata>Pump</Tabledata>
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
            <Tabledata>Chawla Pump Station</Tabledata>
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
            <Tabledata>NH-9 Fuel Station</Tabledata>
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

export default ExistingCustomField;