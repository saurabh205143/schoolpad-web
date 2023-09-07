import React, { useState, useMemo, useEffect } from 'react';
import data from './data.json';
import { ActionsConatiner, ActionsList, TableBody, TableContainer, TableHead, TableHeading, TableRow, Tabledata } from '../../Table/TableStyles';
import LinkButton from '../../Buttons/LinkButton';

// Assets
import EditIcon from '../../../images/edit-icon.svg';
import DeleteIcon from '../../../images/delete-icon.svg';
import DeleteRouteModal from '../../../views/main/TransportModule/TransportRoute/components/DeleteRouteModal/DeleteRouteModal';
import Pagination from '../../Pagination/Pagination';
import AddVendor from '../../../views/main/InventoryModule/ManageVendors/components/AddVendor';
import EditVendor from '../../../views/main/InventoryModule/ManageVendors/components/EditVendor';
import DeleteVendor from '../../../views/main/InventoryModule/ManageVendors/components/DeleteVendor';

let PageSize = 10;

const ManageVendorTable = ({ onClick, record,totalRecord,vendorList,showDeleteToastMessage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [Count, setCount] = useState(0);
  const [singlerecord, setsinglerecord] = useState(0);
  // console.log({ record });
  const hideDeleteModal = () => {
    setShowDeleteModal(false);
  }

  const hideModal = () => {
    setShowModal(false);
  }

  const setVendorDetail = (detail) => {
    setsinglerecord(detail);
  }

  const setVendorDelete = (detail) => {
    let vendrDet = { 'vetid': detail.id, 'vendorname': detail.vendorName }
    setsinglerecord(vendrDet);
  }

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  // get table column

  useEffect(() => { 
    getCurrentPage();
    // console.log({searchinfo});
  },[]);
  const getCurrentPage = (page) => {
    
    const cPage = (page == undefined) ? 1 : page;
    const counter = (cPage - 1) * PageSize;
    setCount(counter);

  }
  const col = ['SNo','Vendor Name', 'Vendor Code','Store Name','Address', 'Region', 'ContactNo.', 'Gst No.'];
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
            <TableHeading>Actions</TableHeading>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(record)?record.map((item, i) => {
            const rowNumber = i + Count + 1;
            return (
              <TableRow>
                <Tabledata>{rowNumber}</Tabledata>
                <Tabledata>{item.vendorName}</Tabledata>
                <Tabledata>{item.vendorCode}</Tabledata>
                <Tabledata>{item.storeName}</Tabledata>
                <Tabledata>{item.address}</Tabledata>
                <Tabledata>{item.region}</Tabledata>
                <Tabledata>{item.contactNo}</Tabledata>
                <Tabledata>{item.tinNo}</Tabledata>
                <Tabledata>
                  <ActionsConatiner>
                    <ActionsList>
                      <LinkButton
                        onlyIcon={EditIcon}
                        tooltiptext='Edit'
                        onClick={() => { setShowModal(!showModal); setVendorDetail(item); }}
                      />
                    </ActionsList>
                    <ActionsList>
                      <LinkButton
                        onlyIcon={DeleteIcon}
                        tooltiptext='Delete'
                        onClick={() => { setShowDeleteModal(!showModal); setVendorDelete(item); }} 
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
        totalCount={(totalRecord == 0 || totalRecord == '') ? 0:totalRecord}
        pageSize={PageSize}
        onPageChange={(page) => { vendorList(page - 1, PageSize); getCurrentPage(page); }}
      />

      {/* Edit Vendor Modal */}
        <EditVendor
        show={showModal}
        handleClose={hideModal}
        singlerecord={singlerecord}
      />

      <DeleteVendor
        show={showDeleteModal}
        handleClose={hideDeleteModal}
        singlerecord={singlerecord}
        setVendorDelete={setVendorDelete}
      />
    </>
  );
}

export default ManageVendorTable;