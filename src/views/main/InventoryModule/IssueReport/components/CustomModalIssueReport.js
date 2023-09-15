import React, { useState } from 'react';

// Assets
import { CustomCheckboxField, FieldDivider, ModalBodyConatiner } from '../../../TransportModule/TransportRoute/components/AddRouteStyles';
import Modal from '../../../../../components/Modal/Modal';
import CustomCheckbox from '../../../../../components/Checkbox/CustomCheckbox';


const CustomModalIssueReport = props => {
    const { show, handleClose, Storelist,saveAction } = props;

    const [isChecked, setIsChecked] = useState(true);

    const handleChange = () => {
    setIsChecked(!isChecked);
    };

    const [loading, setLoading] = useState(false);

    // OnSubmit Validate 
    const onSubmit = () => {
        let e = {};
        // if (!validate()) {
        //     return;
        // }
        // setLoading(true);
        // for (let i = 0; i < formValues.length; i++) { 
        // }
        
        // setLoading(true);
        // setTimeout(() => {
        //     window.location.reload();
        // }, 2000);
        // setLoading(false);
        // saveAction();
        
    }


    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Custom Filter(s)'}
            submitText='Apply '
            cancelText='Clear All'
            saveAction={onSubmit}
            loading={loading}
        >
            <form>
                <ModalBodyConatiner>
                <CustomCheckboxField>
                    <CustomCheckbox
                        isChecked={isChecked}
                        onChange={handleChange}
                    />
                    <span>Include Details of Returned Products</span>
                </CustomCheckboxField>
                <CustomCheckboxField>
                    <CustomCheckbox
                        isChecked={isChecked}
                        onChange={handleChange}
                    />
                    <span>Hide Products that have Not been Returned</span>
                </CustomCheckboxField>
                <CustomCheckboxField>
                    <CustomCheckbox
                        isChecked={isChecked}
                        onChange={handleChange}
                    />
                    <span>Hide Products that have been Returned</span>
                </CustomCheckboxField>

                <CustomCheckboxField>
                    <CustomCheckbox
                        isChecked={isChecked}
                        onChange={handleChange}
                    />
                    <span>Show total P.C  (P.C - Disc. + Tax)</span>
                </CustomCheckboxField>
                </ModalBodyConatiner>
            </form>
        </Modal>
    );
};

export default CustomModalIssueReport;