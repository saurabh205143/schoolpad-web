import React from 'react';
import { DeleteInnerContainer, DeleteIcon, DeleteModalBody, DeleteModalContainer, DeleteModalContent, DeleteModalFooter, DeleteModalHeader, FooterButtonContainer, ModalContainer, } from './ModalStyles';
import Headings from '../Headings/Headings';
import Button from '../Buttons/Button';

// Assets
import CloseIcon from '../../images/close-icon.svg';
import WarningIcon from '../../images/warning.svg';


const DeleteModal = props => {
    const { show, handleClose, modalHeading, modalSubHeading, submitText, saveAction, onDelete, children, actionText , cancelText} = props;
    

    return (
        <ModalContainer block={show ? 'block' : 'none'}>
            <DeleteModalContent>
                <DeleteModalHeader>
                    <DeleteInnerContainer>
                    <DeleteIcon>
                    <img src={WarningIcon} alt="Icon"/>
                    </DeleteIcon>
                        
                <Headings xtrasubHeading={modalHeading}/>
                </DeleteInnerContainer>
                </DeleteModalHeader>
                <DeleteModalBody>
                <DeleteModalContainer>
                    <span>You're about to delete route. Doing this means you will no longer be able to restore this route. Are you sure you want to delete it?</span>
                </DeleteModalContainer>
                </DeleteModalBody>
                <DeleteModalFooter>
                    <FooterButtonContainer>
                    {cancelText &&
                        <Button
                            buttonText={cancelText}
                            className={'link-button-black'}
                            onClick={handleClose}
                        />
                    }
                    </FooterButtonContainer>
                    {/* <FooterButtonContainer>
                    {actionText && 
                            <Button
                                buttonText={actionText}
                                className={'primary'}
                                onClick={saveAction}
                            />
                        }
                    </FooterButtonContainer> */}
                    <FooterButtonContainer>
                        {submitText &&
                            <Button
                                buttonText={submitText}
                                className={'primary'}
                                onClick={onDelete}
                            />

                        }
                    </FooterButtonContainer>
                    </DeleteModalFooter>
                    </DeleteModalContent>
        </ModalContainer>
    );
};



export default DeleteModal