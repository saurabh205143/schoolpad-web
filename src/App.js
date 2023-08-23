import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import { GlobalStyle } from './styles/globalStyles';
import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router-dom';
import Transport from './views/main/TransportModule/Transport';
import Setup from './views/main/TransportModule/Setup/Setup';
import TransportRoute from './views/main/TransportModule/TransportRoute/TransportRoute';
import TransportVehicle from './views/main/TransportModule/TransportVehicle/TransportVehicle';
import StudentMapping from './views/main/TransportModule/StudentMapping/StudentMapping';
import TransportZoneMaster from './views/main/TransportModule/TransportZoneMaster/TransportZoneMaster';
import TransportReport from './views/main/TransportModule/TransportReport/TransportReport';
import TransportStopMaster from './views/main/TransportModule/TransportStopMaster/TransportStopMaster';
import TransportAttendance from './views/main/TransportModule/TransportAttendance/TransportAttendance';
import Inventory from './views/main/InventoryModule/Inventory';
import ManageStore from './views/main/InventoryModule/ManageStore/components/ManageStore';
import Toasters from './components/Toaster/Toasters';
import ManageCategories from './views/main/InventoryModule/ManageCategories/components/ManageCategories';
import ManageItems from './views/main/InventoryModule/ManageItems/ManageItems';
import ManageVendors from './views/main/InventoryModule/ManageVendors/ManageVendors';
import PurchaseOrders from './views/main/InventoryModule/PurchaseOrders/PurchaseOrders';
import AddPurchaseOrder from './views/main/InventoryModule/PurchaseOrders/components/AddPurchaseOrder';
import ReceiveItems from './views/main/InventoryModule/ReceiveItems/ReceiveItems';
import ApproveRejects from './views/main/InventoryModule/ReceiveItems/components/ApproveRejects/ApproveRejects';
import IssueItemHome from './views/main/InventoryModule/Issue Items/components/IssueItemHome';
import IssueItemSelectFilter from './views/main/InventoryModule/Issue Items/components/IssueItemSelectFilter';
import ReturnStaffHome from './views/main/InventoryModule/Return Items/components/Return Staff/ReturnStaffHome';
import ReturnItemSelectFilter from './views/main/InventoryModule/Return Items/components/Return Staff/ReturnItemSelectFilter';


export const ThemeContext = React.createContext(null);

function App() {

  const [theme, setTheme] = useState("light");
  const themeStyle = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyle />
        <Helmet >
          <title>School Management And Parent Teacher Communication Software | Schoolpad</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap" rel="stylesheet" />
        </Helmet>
        <>
          <Routes>
            <Route path='/' element={<Transport />} />
            <Route path='/transport' element={<Transport />} />
            <Route path='/transport/transportRoute' element={<TransportRoute />} />
            <Route path='/transport/transportVehicle' element={<TransportVehicle />} />
            <Route path='/transport/transportZone' element={<TransportZoneMaster />} />
            <Route path='/transport/transportReport' element={<TransportReport />} />
            <Route path='/transport/transportAttendance' element={<TransportAttendance />} />
            <Route path='/transport/transportstop' element={<TransportStopMaster />} />
            <Route path='/studentmapping' element={<StudentMapping />} />
            <Route path='/setup' element={<Setup />} />
            <Route path='/hrpayrol' element={<h1>Hr & Payroll</h1>} />
            <Route path='/studentdata' element={<h1>Student Data</h1>} />
            <Route path='/' element={<Inventory/>}/>
            <Route path='/manageStore' element={<ManageStore/>}/>
            <Route path='/manageCategories' element={<ManageCategories/>}/>
            <Route path='/manageItems' element={<ManageItems/>}/>
            <Route path='/manageVendors' element={<ManageVendors/>}/>
            <Route path='/managePurchase' element={<PurchaseOrders/>}/>
            <Route path='/inventory/purchaseAdd' element={<AddPurchaseOrder/>}/>
            <Route path='/manageReceive' element={<ReceiveItems/>}/>
            <Route path='/manageReceive/approve-reject' element={<ApproveRejects/>}/>
            <Route path='/manageIssue' element={<IssueItemHome/>}/>
            <Route path='/manageIssue/staff-select-filter' element={<IssueItemSelectFilter/>}/>
            <Route path='/manageReturn' element={<ReturnStaffHome/>}/>
            <Route path='/manageReturn/staff-select-filter' element={<ReturnItemSelectFilter/>}/>
            <Route path='/toasters' element={<Toasters/>}/>
          </Routes>
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
