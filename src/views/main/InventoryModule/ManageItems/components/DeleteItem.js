import React, { useState } from 'react';
import DeleteModal from '../../../../../components/Modal/DeleteModal';
import axios from 'axios';
import config from '../../../../../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToastModals from '../../../../../components/Toaster/ToastModals';
const DeleteItem = props => {

    const { show, handleClose,onDelete, singlerecord } = props;
    const [id, setId] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const hideModal = () => {
        setId(false);
        }
    const showToastMessage = () => {
          hideModal();
          toast(
            <ToastModals type='successful' message='Your have successfully Removed the Item.' />
          );
      };
    const deleteItem = (id) => {
        // console.log(storeid);
        console.log({ id });
        axios.post(config.baseUrl +"api/v1/inventory/productdelete", {
        
            id:id,
            status:1
            // _method: 'PUT'
          })
          .then(function (response) {
            if(response.status===200)
            {
              showToastMessage();
              setLoading(true);
              setTimeout(() => {
                    window.location.reload();
                }, 2000);
                setLoading(false);
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
            modalHeading={'Delete '+singlerecord.itemname +' Item'}
            submitText='Yes, delete it'
            cancelText='No, do not delete it'
            onDelete={()=>deleteItem(singlerecord.itemid)}
        >
        </DeleteModal>
    );
};

export default DeleteItem;