import React from 'react';
import CategoriesList from '../../../../../components/InventoryTable/CategoriesList';
import Modal from '../../../../../components/Modal/Modal';

const CategoriesListTable= props => {
    const {show,handleClose} = props;
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Category List (08)'}
        >
            <CategoriesList/>
        </Modal>
    );
};

export default CategoriesListTable;