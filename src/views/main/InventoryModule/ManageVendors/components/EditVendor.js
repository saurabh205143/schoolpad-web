import React,{ useState, useEffect} from 'react';
import Modal from '../../../../../components/Modal/Modal';
import Input from '../../../../../components/Inputs/Input';
import LeftIcon from '../../../../../images/phone-icon.svg';
import { FieldContainer, ModalBodyConatiner } from '../../../TransportModule/TransportRoute/components/AddRouteStyles';
import axios from 'axios';
import config from '../../../../../config';
const EditVendor = props => {
    const { show, handleClose, showToastMessage, singlerecord } = props;
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [vendorname, setvendorname] = useState('');
    const [vendorcode, setvendorcode] = useState('');
    const [vendorcontact, setvendorcontact] = useState('');
    const [vendorgstno, setvendorgstno] = useState('');
    const [vendorregion, setvendorregion] = useState('');
    const [vendoraddress, setvendoraddress] = useState('');
    console.log({singlerecord})
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

    const handleVendorNameChange = (e) => { 
        setvendorname(e.target.value);
    }

    const handleVendorCodeChange = (e) => { 
        setvendorcode(e.target.value);
    }
    const handleVendorContactChange = (e) => { 
        setvendorcontact(e.target.value);
    }

    const handleGstnoChange = (e) => { 
        setvendorgstno(e.target.value);
    }

    useEffect(() => {
        setvendorname(singlerecord.vendorName);
        setvendorcode(singlerecord.vendorCode);
        setvendorcontact(singlerecord.contactNo);
        setvendorgstno(singlerecord.tinNo);
        setvendorregion(singlerecord.region);
        setvendoraddress(singlerecord.address);
    },[singlerecord])



     // OnSubmit Validate 
    const onSubmit = () => { 
        let e = {};
        // if (!validate()) {
        //     return;
        // }
        // setLoading(true);
        const baseURL = config.baseUrl +"api/v1/inventory/vendor";
        axios.put(baseURL, {
            vendorName: vendorname,
            vendorCode:vendorcode,
            contactNo: vendorcontact,
            tinNo: vendorgstno,
            address: vendoraddress,
            region:vendorregion,
            userId: 214,
            id:singlerecord.id
        })
            .then(function (response) {
            if(response.data.code == '400')
            {
                e['vendor_name'] = response.data.message;
                // setErrors(e);
            }
            else
            {
                // setLoading(false);
                // showToastMessage();
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }
            
          })
          .catch(function (error) {});
        // setErrors(e);
    }

    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Edit '+vendorname+' Vendor'}
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
                        value={vendorname}
                        onChange={handleVendorNameChange}
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
                    value={vendorcode}
                    onChange={handleVendorCodeChange}
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
                    value={vendorcontact}
                    onChange={handleVendorContactChange}
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
                    value={vendorgstno}
                    onChange={handleGstnoChange}
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
                    value={vendorregion}
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
                    value={vendoraddress}
                    onChange={handleChange}
                    required={true}
                    error={errors.vendor_address}
                />
            </FieldContainer>
            </ModalBodyConatiner>
        </Modal>
    );
};

export default EditVendor;