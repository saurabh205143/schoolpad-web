import React, { useState, useEffect } from 'react'
import { TableBody, TableContainer, TableHead, TableHeading, Tabledata, TableRow, ContainerTable } from '../../../../../components/Table/TableStyles';
import Input from '../../../../../components/Inputs/Input';
import { Link } from 'react-router-dom';

// Assets
import AddMoreIcon from '../../../../../images/add-more-icon.svg';
import { AddMoreField, RemoveContianer } from '../../../TransportModule/TransportRoute/components/AddRouteStyles';
import Button from '../../../../../components/Buttons/Button';
import RemoveIcon from '../../../../../images/delete-icon.svg';
import axios from 'axios';
import * as XLSX from 'xlsx';
import config from '../../../../../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToastModals from '../../../../../components/Toaster/ToastModals';

const baseURL = config.baseUrl;


const options = [
    {
        value: 1,
        label: "Class Wise"
    },
    {
        value: 2,
        label: "Admission No"
    }
];

const optionsType = [
    {
        value: 1,
        label: "Returnable"
    },
    {
        value: 2,
        label: "Consumeable"
    }
];

const AddPurchaseTable = props => {
    const { storeOptions, CategoryList } = props;
    const [CategoriesList, setCategoryList] = useState({});//list for DD
    const [ProductsList, setProductsList] = useState({});
    const [taxList, settaxList] = useState({});
    const [vendorList, setvendorList] = useState({});
    const [storeid, selectedStoreId] = useState(0);
    const [categoryid, selectedCategoryid] = useState(0);
    //====================FETCH CATEGORY LIST===========================//
    const getCategoryList = (e)=>{
            const storeId = e[0].value;
            selectedStoreId(storeId);
            const fetchStoreURL = baseURL +"api/v1/inventory/categories";
            axios.get(fetchStoreURL, {
              params:
                { offset:'',search:'',store_id:storeId}
            }).then((resp) => {
                if(resp.data.details == '')
                {
                    setCategoryList('');
                }
              const catRows = resp.data.rows;
              const catlistDD = catRows.map((value, index) => ({
                label: `${value.categoryName}`,
                value:`${value.id}`,
              }));
              setCategoryList(catlistDD);
            });
    }
    // get product List
    const getProductList = (e) => {
        console.log({e});
        const categoryId = e[0].value;
        const fetchStoreURL = baseURL +"api/v1/inventory/products";
            axios.get(fetchStoreURL, {
              params:
                { offset:'',storeId:storeid,categoryId:categoryId}
            }).then((resp) => {
                if(resp.data.details == '')
                {
                    setCategoryList('');
                }
              const itemRows = resp.data.rows;
              const productlistDD = itemRows.map((value, index) => ({
                label: `${value.itemName}`,
                value:`${value.id}`,
              }));
              setProductsList(productlistDD);
            });

    }
    //====================FETCH TAX LIST===========================//
    const getTaxList = (e)=>{
        // const storeId = e[0].value;
        // selectedStoreId(storeId);
        const fetchStoreURL = baseURL +"api/v1/inventory/tax";
        axios.get(fetchStoreURL, {
          params:
            { offset:0,limit:''}
        }).then((resp) => {
            console.log(resp.data.details);
            if(resp.data.details == '')
            {
                settaxList('');
            }
          const taxRows = resp.data.details;
          const taxDD = taxRows.map((value, index) => ({
            label: `${value.tax_name+' - ('+value.tax_percentage+' %)'}`,
            value:`${value.id}`,
          }));
          console.log({taxDD});
          settaxList(taxDD);
        });
}
 //====================FETCH Vendor LIST===========================//
 const getVendorList = (e)=>{
    // const storeId = e[0].value;
    // selectedStoreId(storeId);
    const fetchVendorURL = baseURL +"api/v1/inventory/vendors";
    axios.get(fetchVendorURL, {
      params:
        { offset:0,limit:''}
    }).then((resp) => {
        console.log(resp.data.details);
        if(resp.data.details == '')
        {
            settaxList('');
        }
      const vendorRows = resp.data.rows;
      const vendorDD = vendorRows.map((value, index) => ({
        label: `${value.vendorName}`,
        value:`${value.id}`,
      }));
    //   console.log({taxDD});
      setvendorList(vendorDD);
    });
}

useEffect(() =>{
    getTaxList();
    getVendorList();
},[]);
    const { show, handleClose } = props;
    const [formValues, setFormValues] = useState(
        [
            {
                staff_member: "",
                route_name: "",
                stops: "",
                set_order: "",
                vehicle_number: "",
                vehicle_capacity: "",
                bus_help: "",
            }
        ]
    )

    let addFormFields = () => {
        setFormValues([...formValues, { stops: "", set_order: "" }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }
    return (
        <>
            <TableContainer>
                <TableHead>
                    <TableRow>
                        <TableHeading>S No.</TableHeading>
                        <TableHeading>Store Name</TableHeading>
                        <TableHeading>Category Name</TableHeading>
                        <TableHeading>Product Name</TableHeading>
                        <TableHeading>Quantity</TableHeading>
                        <TableHeading>P.Cost</TableHeading>
                        <TableHeading>Rtn/Cns/Non-Cns</TableHeading>
                        <TableHeading>Discount%</TableHeading>
                        <TableHeading>Tax%</TableHeading>
                        <TableHeading>Vendors</TableHeading>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <Tabledata>1</Tabledata>
                        <Tabledata>
                            {/* Store  */}
                            <Input
                                type="select"
                                options={storeOptions}
                                placeholder={'--Select Store--'}
                                onChange={(e) => {
                                    getCategoryList(e);
                                }}
                            /></Tabledata>
                        <Tabledata>
                            {/* CATEGORY LIST */}
                            <Input
                                type="select"
                                options={(CategoriesList)?CategoriesList:''}
                                placeholder={'--Select Category--'}
                                onChange={(e) => {
                                    getProductList(e);
                                }}
                            /></Tabledata>
                        <Tabledata>
                            <Input
                                type="select"
                                options={ProductsList}
                                placeholder={'--Select Product--'}
                                onChange={() => {

                                }}
                            />
                        </Tabledata>
                        <Tabledata>
                            <Input
                                type="text"
                                placeholder='Enter Quantity'
                            />
                        </Tabledata>
                        <Tabledata>
                            <Input
                                type="text"
                                placeholder='Enter Purchase Cost'
                            />
                        </Tabledata>
                        <Tabledata>
                        <Input
                        type="select"
                        placeholder={'--Select Type--'}
                        options={optionsType}
                    />
                        </Tabledata>
                        <Tabledata>
                            <Input
                                type="text"
                                placeholder='Enter discount'
                            />
                        </Tabledata>
                        <Tabledata>
                            <Input
                               type="select"
                               placeholder={'--Select Tax--'}
                               options={taxList}
                            />
                        </Tabledata>
                        <Tabledata>
                            <Input
                                type="select"
                                placeholder={'--Select Vendor--'}
                                options={vendorList}
                            />
                        </Tabledata>
                    </TableRow>
                    {(formValues)?formValues.map((element, index) => (
                    <TableRow>
                        <Tabledata>2</Tabledata>
                        <Tabledata>
                            <Input
                                type="select"
                                options={storeOptions}
                                placeholder={'--Select Store--'}
                                onChange={(e) => {
                                    getCategoryList(e);
                                }}
                            /></Tabledata>
                        <Tabledata>
                            <Input
                                type="select"
                                options={(CategoriesList)?CategoriesList:''}
                                placeholder={'--Select Category--'}
                                onChange={(e) => {
                                    getProductList(e);
                                }}
                            /></Tabledata>
                        <Tabledata>
                            <Input
                                type="select"
                                options={ProductsList}
                                placeholder={'--Select Product--'}
                                onChange={() => {

                                }}
                            />
                        </Tabledata>
                        <Tabledata>
                            <Input
                                type="text"
                                placeholder='Enter discount'
                            />
                        </Tabledata>
                        <Tabledata>
                            <Input
                                type="text"
                                placeholder='Enter discount'
                            />
                        </Tabledata>
                        <Tabledata>
                            <Input
                                type="select"
                                placeholder={'--Select Type--'}
                                options={optionsType}
                            />
                        </Tabledata>
                        <Tabledata>
                            <Input
                                type="text"
                                placeholder='Enter discount'
                            />
                        </Tabledata>
                        <Tabledata>
                            <Input
                               type="select"
                               placeholder={'--Select Tax--'}
                               options={taxList}
                            />
                        </Tabledata>
                        <Tabledata>
                            <Input
                                type="select"
                                placeholder={'--Select Vendor--'}
                                options={vendorList}
                            />
                        </Tabledata>
                        {
                            index ?
                                <RemoveContianer>
                                    <Button
                                        className={'only-icon-button'}
                                        onlyIcon={RemoveIcon}
                                        onClick={() => removeFormFields(index)}
                                        required={true}
                                    />
                                </RemoveContianer>
                                : null
                        }
                    </TableRow>
                    )):null}
                </TableBody>
            </TableContainer>
                {/* Add More field button */}
                    <AddMoreField style={{padding: '17px'}}>
                        <Link onClick={() => addFormFields()}>
                            <img src={AddMoreIcon} alt="Icon" />
                            <span>Add Another Item</span>
                            </Link>
                    </AddMoreField>
        </>
    );
}

export default AddPurchaseTable;