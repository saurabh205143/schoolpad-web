import React, { useState } from 'react';
import DeleteModal from '../../../../../components/Modal/DeleteModal';
import axios from 'axios';
import config from '../../../../../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToastModals from '../../../../../components/Toaster/ToastModals';

const DeleteRouteModal = props => {

    const { show, handleClose, storeid } = props;
    const [id, setId] = useState('');
    const hideModal = () => {
        setId(false);
        }
    const showToastMessage = () => {
          hideModal();
          toast(
            <ToastModals type='successful' message='Your have successfully Removed the Store.' />
          );
      };
    const deleteStore = (id) => {
        // console.log(storeid);
        console.log({ id });
        axios.put(config.baseUrl +"api/v1/inventory/archivestore", {
        
            id:id,
            status:1
            // _method: 'PUT'
          })
          .then(function (response) {
            if(response.status===200)
            {
                showToastMessage();
                // alert(response.data.message);
            }
            else{
                console.log(response);
                throw new Error('Something went wrong ...');
            }
            // console.log(response);
          })
          .catch(function (error) {
            console.log(error.message);
          });
    };
    return (
        <DeleteModal
            show={show}
            handleClose={handleClose}
            modalHeading={'Delete Route'}
            submitText='Yes, delete it'
            cancelText='No, do not delete it'
            onDelete={()=>deleteStore(storeid)}
        >
        </DeleteModal>
    );
};

export default DeleteRouteModal;