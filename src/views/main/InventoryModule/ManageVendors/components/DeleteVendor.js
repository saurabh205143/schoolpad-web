import React,{ useState} from 'react';
import DeleteModal from '../../../../../components/Modal/DeleteModal';
import axios from 'axios';
import config from '../../../../../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToastModals from '../../../../../components/Toaster/ToastModals';
const baseURL = config.baseUrl;
   
    
const DeleteVendor = props => {

    const { show, handleClose, singlerecord,hideDeleteModal } = props;
    const [loading, setLoading] = useState(false);
    const showDeleteToastMessage = () => {
        // hideDeleteModal();
        toast(
            <ToastModals type='successful' message='Your have deleted Vendor successfully.' />
        );
    }; 
    const deleteVendor = () => { 
        // console.log(setVendorDelete());
        setLoading(true);
        const fetchcategoryURL = baseURL +"api/v1/inventory/deletevendor";
            axios.post(fetchcategoryURL, {
            params:
                { id: singlerecord.vetid, userid:214}
            }).then((resp) => {
                // console.log({resp});
                if (resp.data.code == '404') {
                        setLoading(false);
                }
                // showDeleteToastMessage();
                
            });
        // setTimeout(() =>
        // {
        //     window.location.reload();
        // }, 2000);
        setLoading(false);
    }
    return (
        <DeleteModal
            show={show}
            handleClose={handleClose}
            modalHeading={'Delete Vendor'}
            description = { 'You are deleting '+singlerecord.vendorname+' '}
            submitText='Yes, delete it'
            cancelText='No, do not delete it'
            onDelete={deleteVendor}
        >
        </DeleteModal>
    );
};

export default DeleteVendor;