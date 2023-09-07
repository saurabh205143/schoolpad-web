import React, { useState, useMemo, useEffect,setState } from 'react';
import data from './data.json';
import axios from 'axios';
import config from '../../../config';
import { useLocation } from "react-router-dom";
import { TableActionHeading, TableBody, TableContainer, TableHead, TableHeading, TableRow, Tabledata } from '../../Table/TableStyles';
const baseURL = config.baseUrl;

const PreviewVendorTable = () => {
  const col = ['SNo','Vendor Name', 'Vendor Code','Store Name','Address', 'Region', 'ContactNo.', 'Gst No.'];//Object.keys(data[0]);
  const { language } = useLocation();
  const [record, setrecord] = useState('');

  const fetchstoreURL = baseURL +"api/v1/inventory/vendor";
  useEffect(() => {    
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let searchKeywords = params.get('params');
      axios.get(fetchstoreURL, {
          params:
            { offset: '', limit:'',search:searchKeywords}
      }).then((resp) => {
          setrecord(resp.data);
        });
  },[]);
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
        {col.map((data) => (
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
              {/* <TableActionHeading>
                  Categories
              </TableActionHeading> */}
              </TableHeading>
            {/* <TableHeading>
              <TableActionHeading>
                  Actions
              </TableActionHeading>
              </TableHeading> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(record)?record.map((item,i) => {
            return (
              <TableRow key={item.id}> {/* Added a unique key */}
                <Tabledata>
                  {/* <CustomCheckbox
                    isChecked={isChecked}
                    onChange={handleChange}
                  /> */}
                </Tabledata>
                <Tabledata>{ ++i }</Tabledata>
                <Tabledata>{item.vendorName}</Tabledata>
                <Tabledata>{item.vendorCode}</Tabledata>
                <Tabledata>{item.storeName}</Tabledata>
                <Tabledata>{item.address}</Tabledata>
                <Tabledata>{item.region}</Tabledata>
                <Tabledata>{item.contactNo}</Tabledata>
                <Tabledata>{item.tinNo}</Tabledata>
              </TableRow>
            );
          }):null}
        </TableBody>
      </TableContainer>
      
    </>
  );
  
    

}

export default PreviousTableVendor;