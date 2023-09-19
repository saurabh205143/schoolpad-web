import React, { useEffect, useState } from 'react';
import CategoriesList from '../../../../../components/InventoryTable/CategoriesList';
import Modal from '../../../../../components/Modal/Modal';
import axios from 'axios';
import config from '../../../../../config';
const baseURL = config.baseUrl;
const CategoriesListTable= props => {
    const { show, handleClose, storeid, setstoreid } = props;
    const [Storeid, setStoreid] = useState({});
    // useEffect(() => {
    //     setStoreid(storeid);
    // });
    // const fetchstoreURL = baseURL +"api/v1/inventory/fetchcategory";
    console.log({ storeid });
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Category List'}//('+Storeid.categorycount+')
            onload={handleClose}
            
        >
            <CategoriesList setstoreid={setstoreid} storeid={storeid}/>
        </Modal>
    );
};

export default CategoriesListTable;