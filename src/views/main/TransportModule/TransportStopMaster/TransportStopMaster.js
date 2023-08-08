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



const TransportStopMaster = () => {
  const [showModal, setShowModal] = useState(false);
  const [showstudentList, setShowStudentList] = useState(false);
  const [showchangeHistory, setShowChangeHistory] = useState(false);
  const [showRouteOrderModal, setShowRouteOrderModal] = useState(false);

   const [getStopResponse, setStopResponse] = useState({getAllStop:[]});
    /**
     * 
     * Calling APi get Post
     */
    useEffect(() => {
        axios.get(config.baseUrl + 'api-transport/transportStopApiManager/getAllStops/1/1/1').then((response) => {
            setStopResponse(response.data);
            console.log(response.data);
        }).catch((errorCatch) => {
            console.log(errorCatch);
        });
    }, []);
  
  const hideModal = () => {
    setShowModal(false);
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



  return (
    <Layout type='transport'>
      {/* <ItemsNotFound/> */}
      <SubHeader 
      heading='Transport Stop Master' 
      type='horizontal' 
      buttonAdd='Add New Stop'
      buttonOrders='Order Stop(s)'  
      searchPlaceholder='Search by stop name etc...'
      onClick={() => setShowModal(!showModal)} 
      buttonOrderDragList={() => setShowRouteOrderModal(!showRouteOrderModal)}
      />

      <ExportHeader
        smallHeading='All Stops'
        smallHeding2={getStopResponse.getAllStop.length}
        PrintIcon={PrintImage}
        Excelicon={ExcelImage}
      />

      <TableStopMaster
        heading='Child Name'
        onClick={() => setShowStudentList(!showstudentList)}
        EditOnclick={() => setShowModal(!showModal)} 
      />

      {/* Add Stop Master Modal */}
      <AddStopMaster
        show={showModal}
        handleClose={hideModal}
      />

      {/* Student List */}
      <StudentListTable
        show={showstudentList}
        handleClose={hideStudentListModal}
      />

      {/* Route Order Modal */}
      <RouteOrders
        show={showRouteOrderModal}
        handleClose={hideRouteOrderModal}
      />

      {/* Change History */}
      <ChangeHistory
        show={showchangeHistory}
        handleClose={hideChangeHistorytModal}
      />
    </Layout>

  )
}

export default TransportStopMaster;