import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import config from '../../../../../config';
import Modal from '../../../../../components/Modal/Modal';
import { FieldContainer, ModalBodyConatiner } from '../../TransportRoute/components/AddRouteStyles';
import Input from '../../../../../components/Inputs/Input';

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

const AddStopMaster = props => {
    const { show, handleClose } = props;
    const [stop_name, setStopName] = useState('');
    const [stop_Abb, setStopAbb] = useState('');
    const [stopResponse, setStopResponse] = useState([]);
    const [stopNameError, setStopNameError] = useState('');
    const [stopAbbError, setStopAbbError] = useState('');
    const submit = () => {
        
    /**
     * 
     * Calling APi get Post
     */

        axios.post(config.baseUrl+'api-transport/transportStopApiManager/add_Stop', {
            stopName: stop_name,
            stopAbbr: stop_Abb,
            userId : "000",
            instituteId:1
        }).then((response) => {
            setStopResponse(response.data);
            console.log(response.data);
            }).catch((errorCatch) => { 
                console.log(errorCatch);
            });
        
        /**
         * 
         * Basic validation Check if stop name and stop Abb is not empty
         * 
         */
            if (stop_name === '') {
                setStopNameError('Stop Name cannot be left blank.');
            } else {
                setStopNameError('');
            }
            if (stop_Abb === '') {
                setStopAbbError('Stop Abbr cannot be left blank.');
            } else {
                setStopAbbError('');
            }
     }
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Add New Stop'}
            submitText='Save and Close'
            actionText='Save and Continue'
            cancelText='Cancel'
            saveAction={submit}
            
        >
        <ModalBodyConatiner>
        <FieldContainer>
                <Input
                    type='text'
                    options={options}
                    label={'Stop Name'}
                    placeholder={'Enter stop name'}
                        onChange={event => {
                            setStopName(event.target.value)
                            setStopNameError('')
                        }
                    }
                    />
                    {stopNameError && <span className="error-message">{stopNameError}</span>}
            </FieldContainer>
            <FieldContainer>
                <Input
                    type="text"
                    placeholder={'Enter stop abbreviation'}
                    label={'Stop Abbreviation'}
                        name={'bus_help'}
                        onChange={event => {
                            setStopAbb(event.target.value)
                            setStopAbbError('');
                        }   
                    }
                    />
                    {stopAbbError && <span className="error-message">{stopAbbError}</span>}
            </FieldContainer>
        </ModalBodyConatiner>
        </Modal>
    );
};

export default AddStopMaster;