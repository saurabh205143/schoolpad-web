import React, { useState, useMemo } from 'react';
import data from './data.json';
import { ActionsConatiner, ActionsList, TableBody, TableContainer, TableHead, TableHeading, TableRow, Tabledata } from '../../Table/TableStyles';
import LinkButton from '../../Buttons/LinkButton';

// Assets
import EditIcon from '../../../images/edit-icon.svg';
import DeleteIcon from '../../../images/delete-icon.svg';
import DeleteRouteModal from '../../../views/main/TransportModule/TransportRoute/components/DeleteRouteModal/DeleteRouteModal';
import Pagination from '../../Pagination/Pagination';
import Button from '../../Buttons/Button';
import TableStylesStatus from '../../Table copy/TableStyles';
import AddItems from '../../../views/main/InventoryModule/ManageItems/components/AddItems';
import CategoriesListTable from '../../../views/main/InventoryModule/ManageStore/components/CategoriesListTable';

let PageSize = 3;

const ManageItemTable = ({ onClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCategoryListModal, setShowCategoryListModal] = useState(false);

  const hideCategoryListModal = () => {
    setShowCategoryListModal(false);
  }

  const hideDeleteModal = () => {
    setShowDeleteModal(false);
  }

  const hideModal = () => {
    setShowModal(false);
  }

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
            <TableHeading>Categories</TableHeading>
            <TableHeading>Type</TableHeading>
            <TableHeading>Actions</TableHeading>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentTableData.map(item => {
            return (
              <TableRow>
                <Tabledata>{item.SNo}</Tabledata>
                <Tabledata>{item.ItemName}</Tabledata>
                <Tabledata>{item.PurchaseCost}</Tabledata>
                <Tabledata>{item.Units}</Tabledata>
                <Tabledata>{item.StoreName}</Tabledata>
                <Tabledata>
                  <ActionsConatiner>
                    <ActionsList>
                      <Button
                        buttonText='8 Categories'
                        className='link-button'
                        onClick={() => setShowCategoryListModal(!showCategoryListModal)}
                      />
                    </ActionsList>
                  </ActionsConatiner>
                  </Tabledata>
                          <Tabledata>
                  <ActionsConatiner>
                    <ActionsList>
                      <TableStylesStatus
                        type='pending'
                        statusType='PENDING'
                      />
                    </ActionsList>
                  </ActionsConatiner>
                  </Tabledata>
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
          })}
        </TableBody>
      </TableContainer>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />

      {/* Category List Table */}
        <CategoriesListTable
          show={showCategoryListModal}
          handleClose={hideCategoryListModal}
        />

      {/* Edit Categories Modal */}
        <AddItems
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

export default ManageItemTable;