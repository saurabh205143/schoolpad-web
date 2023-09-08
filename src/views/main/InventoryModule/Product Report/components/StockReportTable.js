import React, { useState, useMemo } from 'react';
import data from './data.json';
import { TableBody, TableContainer, TableHead, TableHeading, TableRow, Tabledata } from '../../../../../components/Table/TableStyles';
import TableStylesStatus from '../../../../../components/Table copy/TableStyles';

let PageSize = 2;

  const StockReportTable = ({ onClick }) => {

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
      return <TableHeading key={data}>{data.split(/(?=[A-Z])/).join(" ")}</TableHeading>
    })
  }

  return (
    <>
      <TableContainer>
        <TableHead>
          <TableRow>
            {ThData()}
            <TableHeading>Type</TableHeading>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentTableData.map(item => {
            return (
              <TableRow>
                <Tabledata>{item.SNo}</Tabledata>
                <Tabledata>{item.ItemName}</Tabledata>
                <Tabledata>{item.UnitPrice}</Tabledata>
                <Tabledata>{item.Store}</Tabledata>
                <Tabledata>{item.Category}</Tabledata>
                <Tabledata>{item.TotalItems}</Tabledata>
                <Tabledata>{item.Unit}</Tabledata>
                <Tabledata>{item.TotalPC}</Tabledata>
                <Tabledata>{item.ItemsLeft}</Tabledata>
                <Tabledata>
                  <TableStylesStatus
                    type='item-type-returnable'
                    statusType='RETURNABLE'
                  />
                </Tabledata>
              </TableRow>
            );
          })}
        </TableBody>
      </TableContainer>

    </>
  );
}

export default StockReportTable;