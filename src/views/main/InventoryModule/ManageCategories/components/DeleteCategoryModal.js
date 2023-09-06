import React, { useState} from 'react';
import DeleteModal from '../../../../../components/Modal/DeleteModal';
import axios from 'axios';
import config from '../../../../../config';
const DeleteCategoryModal = props => {
    
    const { show, handleClose, onDelete, singlerecord, saveAction } = props;
     const [loading, setLoading] = useState(false);
    const baseURL = config.baseUrl;
    
    const deleteCategory = () => { 
        // console.log(singlerecord.catid);
        setLoading(true);
        const fetchcategoryURL = baseURL +"api/v1/inventory/deletecategory";
            axios.post(fetchcategoryURL, {
            params:
                { id: singlerecord.catid}
            }).then((resp) => {
                console.log({resp});
                if (resp.data.code == '404') {
                        setLoading(false);
                }
            });
        setTimeout(() =>
        {
            window.location.reload();
        }, 2000);
        setLoading(false);
    }
    return (
        <DeleteModal
            show={show}
            handleClose={handleClose}
            modalHeading={'Delete Category'}
            description = { 'You are deleting '+singlerecord.catname+' '}
            submitText='Yes, delete it'
            cancelText='No, do not delete it'
            onDelete={deleteCategory}
        >
        </DeleteModal>
    );
};

export default DeleteCategoryModal;