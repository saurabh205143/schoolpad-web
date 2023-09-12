import React,{ useState} from 'react';
import Modal from '../../../../../components/Modal/Modal';
import Input from '../../../../../components/Inputs/Input';
import LeftIcon from '../../../../../images/phone-icon.svg';
import { FieldContainer, ModalBodyConatiner } from '../../../TransportModule/TransportRoute/components/AddRouteStyles';
import axios from 'axios';
import config from '../../../../../config';
const AddVendor = props => {
    const { show, handleClose, showToastMessage } = props;
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState({
        vendor_name: '',
        vendor_code: '',
        vendor_contactno: '',
        vendor_gstno: '',
        vendor_address: '',
        vendor_region: '',
    });

    // VALIDATION
    const validate = () => {
        let fields = [
            {
                label: 'Vendor Name',
                key: 'vendor_name',
                required: true,
            },
            {
                label: 'Vendor Code',
                key: 'vendor_code',
                required: true,
            },
            {
                label: 'Contact No.',
                key: 'vendor_contactno',
                required: true,
            },
            {
                label: 'GST No.',
                key: 'vendor_gstno',
                required: true,
            },
            {
                label: 'Region',
                key: 'vendor_region',
                required: true,
            },
            {
                label: 'Address',
                key: 'vendor_address',
                required: true,
            },
            
        ];

        let e = {};
        fields.forEach((field) => {
            if (
                field.required &&
                (inputs[field.key] === undefined ||
                    inputs[field.key] === null ||
                    inputs[field.key] === '')
            ) {
                e[field.key] = `Please enter ${field.label} `;
                return;
            }
            
        });
        
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    // Inputs handle change
    const handleChange = (e) => {
        let i = { ...inputs };
        i[e.target.name] = e.target.value;
        
        if (e.target.name == 'vendor_contactno')
        {
            if (e.target.value != '') {
                const onlyNums = e.target.value.replace(/[^0-9]/g, '');
                    i[e.target.name] = onlyNums;
            }
        }
        setInputs(i);
    };


     // OnSubmit Validate 
    const onSubmit = () => { 
        let e = {};
        if (!validate()) {
            return;
        }
        setLoading(true);
        const baseURL = config.baseUrl +"api/v1/inventory/vendor";
        axios.post(baseURL, {
            vendorName: inputs.vendor_name,
            vendorCode:inputs.vendor_code,
            contactNo: inputs.vendor_contactno,
            tinNo: inputs.vendor_gstno,
            address: inputs.vendor_address,
            region:inputs.vendor_region,
            userId:214
        })
            .then(function (response) {
            if(response.data.code == '400')
            {
                e['vendor_name'] = response.data.message;
                // setErrors(e);
            }
            else
            {
                setLoading(false);
                showToastMessage();
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }
            
          })
          .catch(function (error) {});
        setErrors(e);
    }

    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Add New Vendor'}
            submitText='Confirm'
            cancelText='Cancel'
            saveAction={onSubmit}
        >
            <ModalBodyConatiner>
            <FieldContainer>
                {/* <Input
                    type='text'
                    label={'Vendor Name*'}
                    placeholder={'Enter vendor name'}
                /> */}
                    <Input
                        type="text"
                        label={'Vendor Name*'}
                        placeholder={'Enter vendor name'}
                        name='vendor_name'
                        value={inputs.vendor_name}
                        onChange={handleChange}
                        required={true}
                        error={errors.vendor_name}
                    />
            </FieldContainer>
            <FieldContainer>
                <Input
                    type="text"
                    placeholder={'Enter vendor code'}
                    label={'Vendor Code*'}
                    name={'vendor_code'}
                    value={inputs.vendor_code}
                    onChange={handleChange}
                    required={true}
                    error={errors.vendor_code}
                />
            </FieldContainer>
            <FieldContainer>
                <Input
                    type="text"
                    placeholder={'Enter contact number'}
                    label={'Contact No.*'}
                    name={'vendor_contactno'}
                    leftIcon={LeftIcon}
                    value={inputs.vendor_contactno}
                    onChange={handleChange}
                    required={true}
                    error={errors.vendor_contactno}
                    
                />
            </FieldContainer>
            <FieldContainer>
                <Input
                    type="text"
                    placeholder={'Enter gst no'}
                    label={'GST No.*'}
                    name={'vendor_gstno'}
                    value={inputs.vendor_gstno}
                    onChange={handleChange}
                    required={true}
                    error={errors.vendor_gstno}
                />
            </FieldContainer>
            <FieldContainer>
                <Input
                    type="text"
                    placeholder={'Enter region'}
                    label={'Region*'}
                    name={'vendor_region'}
                    value={inputs.vendor_region}
                    onChange={handleChange}
                    required={true}
                    error={errors.vendor_region}
                />
            </FieldContainer>
            <FieldContainer>
                <Input
                    type="textarea"
                    placeholder={'Enter vendor address'}
                    label={'Address'}
                    name={'vendor_address'}
                    value={inputs.vendor_address}
                    onChange={handleChange}
                    required={true}
                    error={errors.vendor_address}
                />
            </FieldContainer>
            </ModalBodyConatiner>
        </Modal>
    );
};

export default AddVendor;