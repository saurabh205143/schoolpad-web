import React from 'react';
import CategoriesList from '../../../../../components/InventoryTable/CategoriesList';
import Modal from '../../../../../components/Modal/Modal';

const CategoriesListTable= props => {
    const { show, handleClose, setstoreid } = props;
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Category List (081)'}
            onload={handleClose}
            
        >
            <CategoriesList storeid={setstoreid}/>
        </Modal>
    );
};

export default CategoriesListTable;