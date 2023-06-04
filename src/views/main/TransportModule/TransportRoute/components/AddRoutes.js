import React from 'react';
import Modal from '../../../../../components/Modal/Modal';
import Input from '../../../../../components/Inputs/Input';
import { FieldContainer, FieldDivider, FieldLeftContainer, FieldRightContainer } from './AddRouteStyles';

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
            <FieldContainer>
                <Input
                    type='select'
                    options={options}
                    label={'Staff Memmbers'}
                    placeholder={'---- Select staff member ----'}
                />
            </FieldContainer>
            <FieldContainer>
                <Input
                    type="text"
                    placeholder={'Route name'}
                    label={'Route Name'}
                    name={'route_name'}
                />
            </FieldContainer>
            <FieldDivider>
                <FieldLeftContainer>
                    <Input
                        type='select'
                        options={options}
                        label={'Stops'}
                        placeholder={'---- Select stops ----'}
                    />
                </FieldLeftContainer>
                <FieldRightContainer>
                    <Input
                        type="text"
                        placeholder={'Set order'}
                        label={'Order'}
                        name={'set_order'}
                    />
                </FieldRightContainer>
            </FieldDivider>
            <FieldDivider>
                <FieldLeftContainer>
                    <Input
                        type='select'
                        options={options}
                        label={'Stops'}
                        placeholder={'---- Select stops ----'}
                    />
                </FieldLeftContainer>
                <FieldRightContainer>
                    <Input
                        type="text"
                        placeholder={'Set order'}
                        label={'Order'}
                        name={'set_order'}
                    />
                </FieldRightContainer>
            </FieldDivider>
            <FieldDivider>
                <FieldLeftContainer>
                    <Input
                        type='text'
                        name={'vehicle_number'}
                        label={'Vehicle Number'}
                        placeholder={'Vehicle number'}
                    />
                </FieldLeftContainer>
                <FieldRightContainer>
                    <Input
                        type="text"
                        placeholder={'Vehicle capacity'}
                        label={'Vehicle Capacity'}
                        name={'vehicle_capacity'}
                        value='25'
                        disabled={true}
                    />
                </FieldRightContainer>
            </FieldDivider>
            <FieldContainer>
                <Input
                    type="text"
                    placeholder={'Helpline number'}
                    label={'Bus Help'}
                    name={'bus_help'}
                />
            </FieldContainer>
            
        </Modal>
    );
};

export default AddRoutes;