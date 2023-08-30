import React, { useState, useMemo } from 'react';
import data from './data.json';
import { ActionsConatiner, ActionsList, TableActionHeading, TableBody, TableContainer, TableHead, TableHeading, TableRow, Tabledata } from '../../Table/TableStyles';
import LinkButton from '../../Buttons/LinkButton';

// Assets
import EditIcon from '../../../images/edit-icon.svg';
import DeleteIcon from '../../../images/delete-icon.svg';
import AddCategories from '../../../views/main/InventoryModule/ManageCategories/components/AddCategories';
import DeleteRouteModal from '../../../views/main/TransportModule/TransportRoute/components/DeleteRouteModal/DeleteRouteModal';
import Pagination from '../../Pagination/Pagination';
import CustomCheckbox from '../../Checkbox/CustomCheckbox';

let PageSize = 14;

const ManageCategoriesTable = ({ onClick,record,totalRecord }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [Count, setCount] = useState(0);
  console.log({ totalRecord });
  const hideDeleteModal = () => {
    setShowDeleteModal(false);
  }

  const hideModal = () => {
    setShowModal(false);
  }

  const handleChange = () => {
    setIsChecked(!isChecked);
};

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return Array.isArray(record)?record.slice(firstPageIndex, lastPageIndex):0;
  }, [currentPage]);

  // get table column
  
  const column = Object.keys(data[0]);
  const ThData = () => {
    return (
      <>
        {/* <TableHeading>
          <CustomCheckbox
            isChecked={isChecked}
            onChange={handleChange}
          />
        </TableHeading> */}
        {column.map((record) => (
          <TableHeading key={record}>{record.split(/(?=[A-Z])/).join(" ")}</TableHeading>
        ))}
      </>
    );
  };

  return (
    <>
      <TableContainer>
        <TableHead>
          <TableRow>
            {ThData()}
            <TableHeading>
              <TableActionHeading>
                    Actions
              </TableActionHeading>
              </TableHeading>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(record) ? record.map((item, i) => {
            const rowNumber = i + Count + 1;
            return (
              <TableRow>
                {/* <Tabledata>
                  <CustomCheckbox
                    isChecked={isChecked}
                    onChange={handleChange}
                  />
                </Tabledata> */}
                <Tabledata>{rowNumber}</Tabledata>
                <Tabledata>{item.categoryName}</Tabledata>
                <Tabledata>{item.categoryCode}</Tabledata>
                <Tabledata>{item.storeName}</Tabledata>
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
                  </ActionsConatiner>
                </Tabledata>
              </TableRow>
            );
          }):null}
        </TableBody>
      </TableContainer>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={totalRecord}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />

      {/* Edit Categories Modal */}
        <AddCategories
            show={showModal}
            handleClose={hideModal}
        />

      <DeleteRouteModal
        show={showDeleteModal}
        handleClose={hideDeleteModal}
      />
    </>
  );
}

export default ManageCategoriesTable;