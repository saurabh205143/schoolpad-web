import React, { useState,useEffect } from 'react';
import axios from 'axios';
import config from '../../../../config';

// Assets
import PrintImage from '../../../../images/print-icon.svg';
import ExcelImage from '../../../../images/excel-icon.svg';
import Layout from '../../../../components/Layouts/Layout';
import SubHeader from '../../../../components/ScreensHeader/SubHeader';
import ExportHeader from '../../../../components/ScreensHeader/ExportHeader';
import TableStopMaster from '../../../../components/Table Stops/TableStopMaster';
import AddStopMaster from './components/AddStopMaster';
import StudentListTable from './components/StudentListTable';
import ChangeHistory from './components/ChangeHistory';
import RouteOrders from './components/RouteOrders';
import DeleteStopModal from './components/DeleteStopModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToastModals from '../../../../components/Toaster/ToastModals';



const TransportStopMaster = ({orderHeading}) => {
  const [showModal, setShowModal] = useState(false);
  const [showstudentList, setShowStudentList] = useState(null);
  const [showchangeHistory, setShowChangeHistory] = useState(false);
  const [showRouteOrderModal, setShowRouteOrderModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [getStopResponse1, setStopResponse1] = useState({ data: { column: [], rows: [],totalRecords: "0" } });
  const [getStopResponse, setStopResponse] = useState({ data: { column: [], rows: [],totalRecords: "0" } });

  const [count, setCount] = useState(0);
  const [searchText, setSearchText] = useState("");
    /**
     * 
     * Calling APi get Post
     */
    useEffect(() => {
        axios.get(config.baseUrl + 'api-transport/transportStopApiManager/getAllStops/1/1/1/0/0/1').then((response) => {
            setStopResponse(response.data);
            setCount(parseInt(response.data.data.totalRecords));
        }).catch((errorCatch) => {
            console.log(errorCatch);
        });
    }, []);
  
  const hideModal = () => {
    setId(false);
  }

  const hideStudentListModal = () => {
    setShowStudentList(false);
  }

  const hideRouteOrderModal = () => {
    setShowRouteOrderModal(false);
  }

  const hideChangeHistorytModal = () => {
    setShowChangeHistory(false);
  }
  

  const hideDeleteModal = () => {
    setDeleteId(false);
  }

  const [id, setId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const showToastMessage = () => {
    hideModal();
    toast(
      <ToastModals type='successful' message='You have successfully added  stop.' />
    );
  };

  const showEditToastMessage = () => {
    hideModal();
    toast(
      <ToastModals type='successful' message={'You have successfully updated  stop.'} />
    );
};

const showDeleteToastMessage = () => {
  hideDeleteModal();
  toast(
    <ToastModals type='successful' message='You have successfully deleted  stop.' />
  );
};

  return (
    <Layout type='transport'>
      {/* <ItemsNotFound/> */}
      <SubHeader 
        heading='Transport Stop Master'
        type='horizontal'
        buttonAdd='Add New Stop'
        buttonOrders='Order Stop(s)'
        searchPlaceholder='Search by stop name etc...'
        onClick={() => setId(!id)}
        buttonOrderDragList={() => setShowRouteOrderModal(!showRouteOrderModal)}
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <ExportHeader
        smallHeading='All Stops'
        smallHeding2={count}
        PrintIcon={PrintImage}
        Excelicon={ExcelImage}
        // data={getStopResponse1.data}
        data={searchText === "" ? getStopResponse.data : getStopResponse1.data}
      />

      <TableStopMaster
        heading='Student(s)'
        viewList={(showstudentList) => setShowStudentList(showstudentList)}
        EditOnclick={(id) => {setId(id);}} 
        DeleteOnClick={(deleteId) => { setDeleteId(deleteId); }} 
        searchText={searchText}
        setStopResponse1 = {setStopResponse1}
      />

      <ToastContainer
       autoClose={1000} 
       position="bottom-center"
       hideProgressBar={true}
       className="toaster-container"
       />

      {/* Add Stop Master Modal */}
      <AddStopMaster
        show={id}
        handleClose={hideModal}
        id={id}
        saveAction={showToastMessage}
        onEditToast={showEditToastMessage}
        setStopResponse1 = {setStopResponse1}
      />

      {/* Student List */}
      <StudentListTable
        show={showstudentList}
        handleClose={hideStudentListModal}
        id={showstudentList}
      />

      {/* Route Order Modal */}
      <RouteOrders
        show={showRouteOrderModal}
        handleClose={hideRouteOrderModal}
        orderHeading={'Stops Name'}
      />

      {/* Change History */}
      <ChangeHistory
        show={showchangeHistory}
        handleClose={hideChangeHistorytModal}
      />

      {/* Delete Modal */}
      <DeleteStopModal
        show={deleteId}
        handleClose={hideDeleteModal}
        id={deleteId}
        onDelete={showDeleteToastMessage}
        setStopResponse1 = {setStopResponse1}
      />
    </Layout>

  )
}

export default TransportStopMaster;