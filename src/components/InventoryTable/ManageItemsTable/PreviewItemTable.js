import React, { useState, useMemo, useEffect,setState } from 'react';
import data from './data.json';
import { ActionsConatiner, ActionsList, Container, TableActionHeading, TableBody, TableCheckbox, TableContainer, TableHead, TableHeading, TableRow, Tabledata } from '../../Table/TableStyles';
import LinkButton from '../../Buttons/LinkButton';
import axios from 'axios';
import config from '../../../config';
import { useLocation } from "react-router-dom";
const baseURL = config.baseUrl;

const PreviewItemTable = () => {
  //const column = Object.keys(data[0]);
const column = ['SNo','Item Name', 'Purchase Cost','Units','Store Name', 'Category', 'Type'];
  const { language } = useLocation();
  const [record, setrecord] = useState('');

  const fetchstoreURL = baseURL +"api/v1/inventory/products";
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
                <Tabledata>{item.itemName}</Tabledata>
                <Tabledata>{item.mrp}</Tabledata>
                <Tabledata>{item.unit}</Tabledata>
                <Tabledata>{item.storeName}</Tabledata>
                <Tabledata>{item.categoryName}</Tabledata>
                <Tabledata>{(item.rtncns==1)?'Consumable':'Returnable'}</Tabledata>
              </TableRow>
            );
          }):null}
        </TableBody>
      </TableContainer>
      
    </>
  );
  
    

}

export default PreviewItemTable;