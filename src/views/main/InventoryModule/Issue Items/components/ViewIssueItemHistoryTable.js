import React from 'react';
import { TableBody, TableContainer, TableHead, TableHeading, TableRow, Tabledata } from '../../../../../components/Table/TableStyles';

const ViewIssueItemHistoryTable = (props) => {

  return (
    <>
      <TableContainer className='picked-table'>
        <TableHead>
          <TableRow>
            <TableHeading>S No.</TableHeading>
            <TableHeading>Receipt No.</TableHeading>
            <TableHeading>Item Name</TableHeading>
            <TableHeading>Issue Date</TableHeading>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <Tabledata>1</Tabledata>
            <Tabledata>PO-0041</Tabledata>
            <Tabledata>Projector</Tabledata>
            <Tabledata>Jan 24, 2020</Tabledata>
          </TableRow>
          <TableRow>
            <Tabledata>2</Tabledata>
            <Tabledata>PO-0041</Tabledata>
            <Tabledata>Projector</Tabledata>
            <Tabledata>Jan 24, 2020</Tabledata>
          </TableRow>
          <TableRow>
            <Tabledata>3</Tabledata>
            <Tabledata>PO-0041</Tabledata>
            <Tabledata>Projector</Tabledata>
            <Tabledata>Jan 24, 2020</Tabledata>
          </TableRow>
          <TableRow>
            <Tabledata>4</Tabledata>
            <Tabledata>PO-0041</Tabledata>
            <Tabledata>Projector</Tabledata>
            <Tabledata>Jan 24, 2020</Tabledata>
          </TableRow>
        </TableBody>
      </TableContainer>
    </>
  );
}

export default ViewIssueItemHistoryTable;