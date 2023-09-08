import React, { useState, useMemo } from 'react';
import data from './data.json';
import { TableBody, TableContainer, TableHead, TableHeading, TableRow, Tabledata } from '../../../../../../components/Table/TableStyles';

let PageSize = 2;

  const ProductWiseTable = ({ onClick }) => {

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
          </TableRow>
        </TableHead>
        <TableBody>
          {currentTableData.map(item => {
            return (
              <TableRow>
                <Tabledata>{item.SNo}</Tabledata>
                <Tabledata>{item.ProductName}</Tabledata>
                <Tabledata>{item.Category}</Tabledata>
                <Tabledata>{item.TotalProducts}</Tabledata>
                <Tabledata>{item.TotalPC}</Tabledata>
                <Tabledata>{item.ProductsLeft}</Tabledata>
              </TableRow>
            );
          })}
        </TableBody>
      </TableContainer>

    </>
  );
}

export default ProductWiseTable;