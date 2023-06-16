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

export const ThemeContext = React.createContext(null);

function App()  {

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
              <Route path='/transport' element={<Transport />} />
              <Route path='/transport/transportRoute' element={<TransportRoute />} />
              <Route path='/transport/transportVehicle' element={<TransportVehicle />} />
              <Route path='/transport/transportstop' element={<h1>Transport Stop</h1>} />
              <Route path='/studentmapping' element={<StudentMapping />} />
              <Route path='/setup' element={<Setup />} />
              <Route path='/hrpayrol' element={<h1>Hr & Payroll</h1>} />
              <Route path='/studentdata' element={<h1>Student Data</h1>} />
            </Routes>
          
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
