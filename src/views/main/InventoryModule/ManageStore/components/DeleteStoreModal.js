import React from 'react';
import DeleteModal from '../../../../../components/Modal/DeleteModal';
import axios from 'axios';
import config from '../../../../../config';
const DeleteRouteModal = props => {

    const { show, handleClose,storeid } = props;
    const deleteStore = (id) => {
        axios.put(config.baseUrl +"api/v1/inventory/archivestore", {
        
            id:id,
            status:1
            // _method: 'PUT'
          })
          .then(function (response) {
            if(response.ok)
            {
                alert('all ok');
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
            saveAction={()=>deleteStore(storeid)}
        >
        </DeleteModal>
    );
};

export default DeleteRouteModal;