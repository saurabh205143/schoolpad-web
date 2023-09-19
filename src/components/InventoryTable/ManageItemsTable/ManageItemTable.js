import React, { useState, useMemo, useEffect } from 'react';
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
import EditItems from '../../../views/main/InventoryModule/ManageItems/components/EditItems';
import CategoriesListTable from '../../../views/main/InventoryModule/ManageStore/components/CategoriesListTable';
import DeleteItem from '../../../views/main/InventoryModule/ManageItems/components/DeleteItem';

let PageSize = 10;

const ManageItemTable = ({ onClick,record,totalRecord,itemList,categorylist,storelist,unitlist }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCategoryListModal, setShowCategoryListModal] = useState(false);
  const [Count, setCount] = useState(0);
  const [singlerecord, setsinglerecord] = useState(0);


  const hideCategoryListModal = () => {
    setShowCategoryListModal(false);
  }

  const hideDeleteModal = () => {
    setShowDeleteModal(false);
  }

  const hideModal = () => {
    setShowModal(false);
  }
    useEffect(() => { 
    getCurrentPage();
    // console.log({searchinfo});
  },[]);
  const getCurrentPage = (page) => {
    
    const cPage = (page == undefined) ? 1 : page;
    const counter = (cPage - 1) * PageSize;
    setCount(counter);

  }

  // Edit 
  const setSingleItem = (detail) => {
    setsinglerecord(detail);
  }
  const setSingleItemDelete = (detail) => {
    let itemArr = { 'itemid': detail.id, 'itemname': detail.itemName} 
    setsinglerecord(itemArr);
  }

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  // get table column
  
  // const column = Object.keys(data[0]);
  const col = ['SNo','Item Name', 'Purchase Cost','Units','Store Name', 'Category', 'Type'];
  const ThData = () => {
      return col.map((data) => {
          return <TableHeading key={data}>{data.split(/(?=[A-Z])/).join(" ")}</TableHeading>
      })
  }

  return (
    <>
      <TableContainer>
        <TableHead>
          <TableRow>
            {ThData()}
            {/* <TableHeading>Categories</TableHeading>
            <TableHeading>Type</TableHeading> */}
            <TableHeading>Actions</TableHeading>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(record)?record.map((item, i) => {
            const rowNumber = i + Count + 1;
            return (
              <TableRow>
                <Tabledata>{rowNumber}</Tabledata>
                <Tabledata>{item.itemName}</Tabledata>
                <Tabledata>{item.mrp}</Tabledata>
                <Tabledata>{item.unit}</Tabledata>
                <Tabledata>{item.storeName}</Tabledata>
                <Tabledata>
                  {item.categoryName}
                  {/* <ActionsConatiner>
                    <ActionsList>
                      <Button
                        buttonText='8 Categories'
                        className='link-button'
                        onClick={() => setShowCategoryListModal(!showCategoryListModal)}
                      />
                    </ActionsList>
                  </ActionsConatiner> */}
                  </Tabledata>
                <Tabledata> 
                  <TableStylesStatus
                  type={(item.rtncns==1)?'item-type-consumable':'returnable'}
                  statusType={(item.rtncns==1)?'CONSUMABLE':'RETURNABLE'}
                  >
                  </TableStylesStatus>
                  </Tabledata>
                <Tabledata>
                  <ActionsConatiner>
                    <ActionsList>
                      <LinkButton
                        onlyIcon={EditIcon}
                        tooltiptext='Edit'
                        onClick={() => { setShowModal(!showModal); setSingleItem(item); }}
                      />
                    </ActionsList>
                    <ActionsList>
                      <LinkButton
                        onlyIcon={DeleteIcon}
                        tooltiptext='Delete'
                        onClick={() => { setShowDeleteModal(!showModal); setSingleItemDelete(item); }} 
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
        onPageChange={(page) => { itemList(page - 1, PageSize); getCurrentPage(page); }}
      />

      {/* Category List Table */}
        <CategoriesListTable
          show={showCategoryListModal}
          handleClose={hideCategoryListModal}
        />

      {/* Edit Categories Modal */}
        <EditItems
          show={showModal}
          handleClose={hideModal}
          singlerecord={singlerecord}
          storelist={storelist}
          categorylist={categorylist}
          unitlist={unitlist}
        />
      <DeleteItem
        show={showDeleteModal}
        handleClose={hideDeleteModal}
        singlerecord={singlerecord}
      />
    </>
  );
}

export default ManageItemTable;