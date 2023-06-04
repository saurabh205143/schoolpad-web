import React from 'react';
import { FooterButtonContainer, ModalBody, ModalContainer, ModalContent, ModalFooter, ModalHeader } from './ModalStyles';
import Headings from '../Headings/Headings';
import Button from '../Buttons/Button';

// Assets
import CloseIcon from '../../images/close-icon.svg';


const Modal = props => {
    const {show, handleClose, modalHeading, submitText,saveAction, children} = props;
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
                        <Button
                            buttonText={submitText}
                            className={'primary'}
                            onClick={saveAction}
                        />
                    </FooterButtonContainer>
                </ModalFooter>
            </ModalContent>
        </ModalContainer>
    );
};



export default Modal