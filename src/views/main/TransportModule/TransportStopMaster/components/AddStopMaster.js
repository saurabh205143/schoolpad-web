import React from 'react';
import { useState, useEffect } from 'react';
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
        value: 2,
        label: "Ervin Howell"
    }
];

const AddStopMaster = props => {
    const { show, handleClose,saveAction } = props;
    const [stop_name, setStopName] = useState('');
    const [stop_Abb, setStopAbb] = useState('');
    const [stopResponse, setStopResponse] = useState([]);
    const [stopNameError, setStopNameError] = useState('');
    const [stopAbbError, setStopAbbError] = useState('');

    /**
     * 
     * Get Edit Record Api
     */
    useEffect(() => {
    if (props.id !== true) {
        axios.get(config.baseUrl + 'api-transport/transportStopApiManager/get_edit_record/' + props.id).then((response) => {
            setStopName('');
            setStopAbb('');
            setStopNameError('');
            setStopAbbError('');
            setStopName(response.data[0].stopName);
            setStopAbb(response.data[0].stopAbbr);
            console.log(response.data);
        }).catch((errorCatch) => {
            console.log(errorCatch);
        });
        }
    }, [props.id]);

    /**
     * 
     * Submit Function Of Save
     */

    const submit = () => {

        /**
         * 
         * Calling APi get Post
         */
        if (props.id === true) {
            /**
             * 
             * add_stop Api
             */

            axios.post(config.baseUrl + 'api-transport/transportStopApiManager/add_Stop', {
                stopName: stop_name,
                stopAbbr: stop_Abb,
                userId: "000",
                instituteId: 1
            }).then((response) => {
                setStopResponse(response.data);
                console.log(response.data);
                if (response.data.message) {
                    saveAction();
                    setTimeout(() => {
                    window.location.reload();
                }, 4000);
                }
            }).catch((errorCatch) => {
                console.log(errorCatch);
            });
        } else {
            /**
             * 
             * edit_stop Api
             */

            axios.put(config.baseUrl + 'api-transport/transportStopApiManager/edit_stop', {
                stopId: props.id,
                stopName: stop_name,
                stopAbbr: stop_Abb,
                userId: "000"
            }).then((response) => {
                setStopResponse(response.data);
                console.log(response.data);
                saveAction();
                setTimeout(() => {
                window.location.reload();
            }, 4000);
            }).catch((errorCatch) => {
                console.log(errorCatch);
            });
        }

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
    
    console.log(props.id);

    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={props.id !== true ? 'Edit Stop' : 'Add New Stop'}
            submitText='Save and Close'
            actionText={props.id !== true ? '' : 'Save and Continue'}
            cancelText='Cancel'
            saveAction={submit}
            // saveAction={saveAction}
            
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
                        value = {stop_name}
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
                        value={stop_Abb}
                    />
                    {stopAbbError && <span className="error-message">{stopAbbError}</span>}
                </FieldContainer>
            </ModalBodyConatiner>
        </Modal>
    );
};

export default AddStopMaster;