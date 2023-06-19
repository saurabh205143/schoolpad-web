import React from 'react';
import { FooterButtonContainer, ModalBody, ModalContainer, ModalContent, ModalFooter, ModalHeader } from './ModalStyles';
import Headings from '../Headings/Headings';
import Button from '../Buttons/Button';

// Assets
import CloseIcon from '../../images/close-icon.svg';
import { useLocation } from 'react-router-dom';

const Modal = props => {
    const { show, handleClose, modalHeading, submitText, saveAction, children, actionText } = props;

    const on = useLocation();
    const pathName = on.pathname;
    let params = pathName.split('/');
    console.log(params);

    return (
        <ModalContainer block={show ? 'block' : 'none'}>
            <ModalContent>
                <ModalHeader>
                    <Headings xtrasubHeading={modalHeading} />
                    <Button
                        onlyIcon={CloseIcon}
                        onClick={handleClose}
                        className={'only-icon-button'}
                    />
                </ModalHeader>
                <ModalBody>
                    {children}
                </ModalBody>
                <ModalFooter>
                    <FooterButtonContainer>
                        <Button
                            buttonText='Cancel'
                            className={'link-button-black'}
                            onClick={handleClose}
                        />
                    </FooterButtonContainer>
                    <FooterButtonContainer>
                        {
                            actionText &&
                            <Button
                                buttonText={actionText}
                                className={'primary'}
                                onClick={saveAction}
                            />
                        }
                        {submitText &&
                            <Button
                                buttonText={submitText}
                                className={'primary'}
                                onClick={saveAction}
                            />

                        }
                    </FooterButtonContainer>
                </ModalFooter>
            </ModalContent>
        </ModalContainer>
    );
};



export default Modal