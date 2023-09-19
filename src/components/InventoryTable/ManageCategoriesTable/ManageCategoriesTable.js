import React, { useState, useMemo, useEffect } from 'react';
import data from './data.json';
import { ActionsConatiner, ActionsList, TableActionHeading, TableBody, TableContainer, TableHead, TableHeading, TableRow, Tabledata } from '../../Table/TableStyles';
import LinkButton from '../../Buttons/LinkButton';

// Assets
import EditIcon from '../../../images/edit-icon.svg';
import DeleteIcon from '../../../images/delete-icon.svg';
import AddCategories from '../../../views/main/InventoryModule/ManageCategories/components/AddCategories';
import Pagination from '../../Pagination/Pagination';
import EditCategories from '../../../views/main/InventoryModule/ManageCategories/components/EditCategories';
import DeleteCategoryModal from '../../../views/main/InventoryModule/ManageCategories/components/DeleteCategoryModal';

let PageSize = 10;

const ManageCategoriesTable = ({ onClick,record,totalRecord,categoryList,Storelist }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [Count, setCount] = useState(0);
  const [singlerecord, setSinglerecord] =  useState({});
  // console.log({ Storelist });
  const hideDeleteModal = () => {
    setShowDeleteModal(false);
  }

  const hideModal = () => {
    setShowModal(false);
  }

  const handleChange = () => {
    setIsChecked(!isChecked);
};
  // set record for each row
  const setCatdetail = (detail) => {
    setSinglerecord(detail);
  }

  // set id record for each row
  const setCatidDelete = (detail) => {
    let catArr = { 'catid': detail.id, 'catname': detail.categoryName }
    setSinglerecord(catArr);
  }

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return Array.isArray(record)?record.slice(firstPageIndex, lastPageIndex):0;
  }, [currentPage]);
  useEffect(() => { 
      getCurrentPage();
      // console.log({searchinfo});
    },[]);
  const getCurrentPage = (page) => {
    
    const cPage = (page == undefined) ? 1 : page;
    const counter = (cPage - 1) * PageSize;
    setCount(counter);

  }
  
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
                        onClick={() => { setShowModal(!showModal); setCatdetail(item); }}
                      />
                    </ActionsList>
                    <ActionsList>
                      <LinkButton
                        onlyIcon={DeleteIcon}
                        tooltiptext='Delete'
                        onClick={() => { setShowDeleteModal(!showModal); setCatidDelete(item); }} 
                      />
                    </ActionsList>
                  </ActionsConatiner>
                </Tabledata>
              </TableRow>
            );
          }):null}
        </TableBody>
      </TableContainer>
      {/* <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        // totalCount={Array.isArray(totalRecord)?totalRecord:0}
        pageSize={PageSize}
        onPageChange={(page) => {categoryList(page - 1, PageSize); getCurrentPage (page) }}
      /> */}
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={totalRecord}
        pageSize={PageSize}
        onPageChange={(page) => {categoryList(page - 1, PageSize); getCurrentPage (page) }}
      />

      {/* Add Categories Modal */}
        <AddCategories
            show={showModal}
            handleClose={hideModal}
      />
      <EditCategories
        show={showModal}
        handleClose={hideModal}
        singlerecord={singlerecord}
        Storelist={Storelist}
      />
      <DeleteCategoryModal
        show={showDeleteModal}
        handleClose={hideDeleteModal}
        singlerecord={singlerecord}
      />
    </>
  );
}

export default ManageCategoriesTable;