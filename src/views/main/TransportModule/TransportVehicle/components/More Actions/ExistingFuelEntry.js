import React from 'react';

// Assets
import EditIcon from '../../../../../../images/edit-icon.svg';
import DeleteIcon from '../../../../../../images/delete-icon.svg';
import LinkButton from '../../../../../../components/Buttons/LinkButton';
import { ModalBodyConatiner } from '../../../TransportRoute/components/AddRouteStyles';
import { ActionsConatiner, ActionsList, TableBody, TableContainer, TableHead, TableHeading, TableHeadingModalAction, TableRow, Tabledata } from '../../../../../../components/Table/TableStyles';

const ExistingFuelEntry = (props) => {

  return (
    <>
    <ModalBodyConatiner>
      <TableContainer className='picked-table'>
        <TableHead>
          <TableRow>
            <TableHeading>S No.</TableHeading>
            <TableHeading>Name</TableHeading>
            <TableHeading>Date</TableHeading>
            <TableHeading>
              <TableHeadingModalAction>Actions</TableHeadingModalAction>
              </TableHeading>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <Tabledata>1</Tabledata>
            <Tabledata>Engine Issue</Tabledata>
            <Tabledata>Jan 24, 2020</Tabledata>
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
            <Tabledata>Dec 24, 2020</Tabledata>
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
            <Tabledata>Nov 24, 2020</Tabledata>
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

export default ExistingFuelEntry;