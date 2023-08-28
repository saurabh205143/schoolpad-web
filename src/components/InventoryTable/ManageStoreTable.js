import React, { useState, useMemo, useEffect,setState } from 'react';
import data from './data.json';
import { ActionsConatiner, ActionsList, Container, TableActionHeading, TableBody, TableCheckbox, TableContainer, TableHead, TableHeading, TableRow, Tabledata } from '../Table/TableStyles';
import LinkButton from '../Buttons/LinkButton';
import axios from 'axios';
import config from '../../config';
// Assets
import EditIcon from '../../images/edit-icon.svg';
import DeleteIcon from '../../images/delete-icon.svg';
// import DeleteRouteModal from '../../views/main/TransportModule/TransportRoute/components/DeleteRouteModal/DeleteRouteModal';
import Pagination from '../Pagination/Pagination';
import AddStore from '../../views/main/InventoryModule/ManageStore/components/AddStore';
import EditStore from '../../views/main/InventoryModule/ManageStore/components/EditStore';
import DeleteStoreModal from '../../views/main/InventoryModule/ManageStore/components/DeleteStoreModal';
import Button from '../Buttons/Button';
import CustomCheckbox from '../Checkbox/CustomCheckbox';
import { ButtonContainer } from '../ScreensHeader/subHeaderStyles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToastModals from '../Toaster/ToastModals';

let PageSize = 10;

const ManageStoreTable = ({ onClick,totalRecord,searchinfo,searchData,storeid, setstoreid }) => {
  const [currentPage, setCurrentPage] = useState();
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [record, setRecord] = useState({});
  const [offSet, setoffSet] = useState(0);
  const hideDeleteModal = () => {
    setShowDeleteModal(false);
  }

  const hideModal = () => {
    setShowModal(false);
  }
  const getEditDetailByStoreId = (storedetail)=>
  {    
    // console.log(storeid);
    setRecord(storedetail);
  }

  const getDetailByStoreId = (storeid)=>
  {
    setstoreid(storeid);
  }
  // Successfull edited
  const showToastMessage = () => {
    hideModal();
    toast(
      <ToastModals type='successful' message='Store edit successfully.' />
    );
  };

  // Successfull Deleted
  const showDeleteToastMessage = () => {
    hideDeleteModal();
    toast(
      <ToastModals type='successful' message='Store delete successfully.' />
    );
  };

  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  const deleteStoreAction = (storeid) => {
    setRecord(storeid);
  };
  useEffect(() => { 
    getCurrentPage();
    // console.log({searchinfo});
  },[]);
  
  
  const getCurrentPage = (page) => {
    
    const counter = (page - 1) * PageSize;
    console.log({ counter });
    setoffSet(counter);
  // console.log({ page });
    // console.log({offSet},{page});
    // const baseURL = config.baseUrl + "api/v1/inventory/store";
    //   axios.get(baseURL,{
    //     params:
    //       { offset: 0, limit:10,search:''}
    //   }).then((resp) => {
    //     console.log({resp});
    //     storelist(resp.data);
    //   });
  }
  
  
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return Array.isArray(searchinfo)?searchinfo.slice(firstPageIndex, lastPageIndex):0;
  }, [currentPage]);
  
  const column = Object.keys(data[0]);
  
  const ThData = () => {
    return (
      <>
        <TableHeading>
          {/* <TableCheckbox>
            <CustomCheckbox
              isChecked={isChecked}
              onChange={handleChange}
            />
          </TableCheckbox> */}
        </TableHeading>
        {column.map((data) => (
          <TableHeading key={data}>{data.split(/(?=[A-Z])/).join(" ")}</TableHeading>
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
                  Categories
              </TableActionHeading>
              </TableHeading>
            <TableHeading>
              <TableActionHeading>
                  Actions
              </TableActionHeading>
              </TableHeading>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(searchinfo) ? searchinfo.map((item, i) => {
            console.log(offSet);
            // let cntr = offSet;
            return (
              <TableRow key={item.id}> {/* Added a unique key */}
                <Tabledata>
                  {/* <CustomCheckbox
                    isChecked={isChecked}
                    onChange={handleChange}
                  /> */}
                </Tabledata>
                <Tabledata>{ ++i }</Tabledata>
                <Tabledata>{item.storeName}</Tabledata>
                <Tabledata>{item.storeDesc}</Tabledata>
                <Tabledata>{item.storeCode}</Tabledata>
                <Tabledata>{item.storeManager}</Tabledata>
                <Tabledata>
                  <ActionsConatiner>
                    <ActionsList>
                      <Button
                        buttonText={""+item.categorycount+" Categories" }
                        className='link-button'
                        onClick={() => { onClick(); getDetailByStoreId(item.id); }}
                        //onClick={onClick}
                        // selectedStoreId={console.log(item.d)}
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
                        onClick={() => { setShowModal(!showModal); getEditDetailByStoreId(item);}}
                        //onClick={() => setShowModal(!showModal,item.id)}
                      />
                    </ActionsList>
                    <ActionsList>
                      <LinkButton
                        onlyIcon={DeleteIcon}
                        tooltiptext='Delete'
                        onClick={() => {setShowDeleteModal(!showDeleteModal);deleteStoreAction(item.id)} }
                        //onClick={() => setShowDeleteModal(!showDeleteModal)} 
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
        // currentPage={currentPage}
        totalCount={totalRecord}
        pageSize={PageSize}
        onPageChange={(page) => { searchData(page - 1, PageSize); getCurrentPage(page); }}//getCurrentPageRecord(page);
      />
      {/* Toaster Container */}
      <ToastContainer
        autoClose={4000} 
        position="bottom-center"
        hideProgressBar={true}
        className="toaster-container"
       />

      {/* Edit Route Modal */}
      {/* <AddStore
        show={showModal}
        handleClose={hideModal}
      /> */}
      <EditStore
        show={showModal}
        handleClose={hideModal}
        record={record}
        saveAction={showToastMessage}
      />
      {/* Delete Modal */}
      <DeleteStoreModal
        show={showDeleteModal}
        handleClose={hideDeleteModal}
        storeid={record}
        onDelete={showDeleteToastMessage}
      />

      {/* Delete Button */}
      
      <ButtonContainer>
      {isChecked && (
          <Button
            buttonText='Delete Store'
            className='delete'
          />
        )}
      </ButtonContainer>
      
    </>
  );
}

export default ManageStoreTable;