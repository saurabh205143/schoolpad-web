import React from 'react';
import Modal from '../../Modal/Modal';
import Input from '../../Inputs/Input';

const options = [
    { 
      value: 1,
      label: "Leanne Graham"
    },
    {
      value:  2,
      label: "Ervin Howell"
    }
];

const AddRoutes = props => {
    const {show,handleClose} = props;
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Add New Route'}
            submitText='Confirm'
        >
            <Input
                type='select'
                options={options}
                label={'Staff Memmbers'}
                placeholder={'---- Select staff member ----'}
            />
            <Input
                type="text"
                placeholder={'Route Name'}
                label={'Route Name'}
                name={'route_name'}
            />
        </Modal>
    );
};

export default AddRoutes;