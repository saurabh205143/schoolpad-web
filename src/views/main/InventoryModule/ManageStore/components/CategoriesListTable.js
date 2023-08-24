import React from 'react';
import CategoriesList from '../../../../../components/InventoryTable/CategoriesList';
import Modal from '../../../../../components/Modal/Modal';

const CategoriesListTable= props => {
    const { show, handleClose,storeid,  setstoreid } = props;
    console.log({ setstoreid });
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Category List (08)'}
            onload={handleClose}
            
        >
            <CategoriesList setstoreid={setstoreid} storeid={storeid}/>
        </Modal>
    );
};

export default CategoriesListTable;