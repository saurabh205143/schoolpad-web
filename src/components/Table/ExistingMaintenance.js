import React from 'react';
import { ActionsConatiner, ActionsList, TableBody, TableContainer, TableHead, TableHeading, TableHeadingModalAction, TableRow, Tabledata } from './TableStyles';
import LinkButton from '../Buttons/LinkButton';

// Assets
import EditIcon from '../../images/edit-icon.svg';
import DeleteIcon from '../../images/delete-icon.svg';
import { ModalBodyConatiner } from '../../views/main/TransportModule/TransportRoute/components/AddRouteStyles';

const ExistingMaintenance= (props) => {

  return (
    <>
    <ModalBodyConatiner>
      <TableContainer className='picked-table'>
        <TableHead>
          <TableRow>
            <TableHeading>S No.</TableHeading>
            <TableHeading>Maintenance Name</TableHeading>
            <TableHeading>
              <TableHeadingModalAction>Actions</TableHeadingModalAction>
              </TableHeading>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <Tabledata>1</Tabledata>
            <Tabledata>Engine Issue</Tabledata>
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
            <Tabledata>Service</Tabledata>
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
            <Tabledata>Mirror</Tabledata>
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

export default ExistingMaintenance;