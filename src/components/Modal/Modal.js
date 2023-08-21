import React from 'react';
import { FooterButtonContainer, ModalBody, ModalContainer, ModalContent, ModalFooter, ModalHeader } from './ModalStyles';
import Headings from '../Headings/Headings';
import Button from '../Buttons/Button';

// Assets
import CloseIcon from '../../images/close-icon.svg';
import { useLocation } from 'react-router-dom';
import { SubHeadingText } from '../Headings/headingStyles';


const Modal = props => {
    const { show, handleClose, modalHeading, loading, modalSubHeading, submitText, saveAction, children, actionText , cancelText} = props;

    const on = useLocation();
    const pathName = on.pathname;
    let params = pathName.split('/');
    console.log(params);

    return (
        <ModalContainer block={show ? 'block' : 'none'}>
            <ModalContent>
                <ModalHeader>
                    <Headings 
                    xtrasubHeading={modalHeading} />
                    <SubHeadingText subHeading={modalSubHeading}/>
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
                    {cancelText &&
                        <Button
                            buttonText={cancelText}
                            className={'link-button-black'}
                            onClick={handleClose}
                        />
                    }
                    </FooterButtonContainer>
                    <FooterButtonContainer>
                    {actionText && 
                            <Button
                                buttonText={actionText}
                                className={'primary'}
                                onClick={saveAction}
                            />
                        }
                    </FooterButtonContainer>
                    <FooterButtonContainer>
                        {submitText &&
                            <Button
                                buttonText={submitText}
                                className={'primary'}
                                onClick={saveAction}
                                loading={loading}
                            />

                        }
                    </FooterButtonContainer>
                    
                </ModalFooter>
            </ModalContent>
        </ModalContainer>
    );
};



export default Modal