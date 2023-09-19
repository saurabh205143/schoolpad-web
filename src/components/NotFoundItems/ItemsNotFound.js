import React from 'react'
import { ButtonContainer, Description, Heading, LinkContainer, NotFoundContainer } from './styles';
import Headings from '../Headings/Headings';
import NotFoundIcon from '../../images/routes-loader.svg';
import Button from '../Buttons/Button';
import LinkButton from '../Buttons/LinkButton';

const ItemsNotFound = ({description, showNoRecordButton}) => {
    return (
        <NotFoundContainer>
            <img src={NotFoundIcon} alt="icon" />
            <Heading>
                <Headings subHeading={'No records found'} />
            </Heading>
            <Description>
                <Headings description={description} />
            </Description>
            {showNoRecordButton && (
            <ButtonContainer>
                <Button
                    buttonText={'Create New Routes'}
                    className={'primary'}
                />
            </ButtonContainer>
            )}
            <LinkContainer>
                <LinkButton
                    linkText="Learn how"
                />
            </LinkContainer>
        </NotFoundContainer>
    )
}

export default ItemsNotFound;