import React from 'react'
import { ButtonContainer, Description, Heading, NotFoundContainer } from './styles';
import Headings from '../Headings/Headings';
import NotFoundIcon from '../../images/routes-loader.svg';
import Button from '../Buttons/Button';

const ItemsNotFound = () => {
    return (
        <NotFoundContainer>
            <img src={NotFoundIcon} alt="icon" />
            <Heading>
                <Headings subHeading={'No routes defined so far'} />
            </Heading>
            <Description>
                <Headings description={'There are no routes defined, to start creating new routes click the button below.'} />
            </Description>
            <ButtonContainer>
                <Button
                 buttonText={'Create New Routes'}
                 className={'primary'}
                />
            </ButtonContainer>
        </NotFoundContainer>
    )
}

export default ItemsNotFound;