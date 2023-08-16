import React, { useState, useMemo, useEffect } from 'react';
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

let PageSize = 10;

const ManageStoreTable = ({ onClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [stores, storelist] = useState([]);
  const [sno, setSno] = useState(0);
  const [storeid,setStoreId] = useState('');
  const[record,setRecord] = useState({});
  

  const hideDeleteModal = () => {
    setShowDeleteModal(false);
  }

  const hideModal = () => {
    setShowModal(false);
  }
  const getDetailByStoreId = (storeid)=>
  {
    setRecord(storeid);
    //  console.log({storeid});
  }

  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  const deleteStoreAction = (storeid) => {
    // console.log({storeid});
    setStoreId(storeid);
  };
  //+currentPage;/?offset=0&limit=10
  const baseURL = config.baseUrl +"api/v1/inventory/store";
  useEffect(() => {
    axios.get(baseURL).then((resp) => {
      storelist(resp.data);
      // setList(currentTableData);
    });
  }, []);
  
  
  const currentTableData = useMemo(() => {
    console.log({currentPage});
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    console.log({lastPageIndex});
    return stores.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  // get table column
  // console.log({ currentTableData });
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
          {currentTableData.map((item,i) => {
            return (
              <TableRow key={item.id}> {/* Added a unique key */}
                <Tabledata>
                  {/* <CustomCheckbox
                    isChecked={isChecked}
                    onChange={handleChange}
                  /> */}
                </Tabledata>
                <Tabledata>{++i}</Tabledata>
                <Tabledata>{item.storeName}</Tabledata>
                <Tabledata>{item.storeDesc}</Tabledata>
                <Tabledata>{item.storeCode}</Tabledata>
                <Tabledata>{item.storeManager}</Tabledata>
                <Tabledata>
                  <ActionsConatiner>
                    <ActionsList>
                      <Button
                        buttonText='8 Categories'
                        className='link-button'
                        onClick={onClick}
                      />
                    </ActionsList>
                  </ActionsConatiner>
                </Tabledata>
                <Tabledata>
                  <ActionsConatiner>
                    <ActionsList>
                      <LinkButton
                        onlyIcon={EditIcon}
                        tooltiptext='Edit'//{() => { func1(); func2();}}
                        onClick={() => { setShowModal(!showModal); getDetailByStoreId(item);}}
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
          })}
        </TableBody>
      </TableContainer>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={stores.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
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
      />
      {/* Delete Modal */}
      <DeleteStoreModal
        show={showDeleteModal}
        handleClose={hideDeleteModal}
        storeid={storeid}
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