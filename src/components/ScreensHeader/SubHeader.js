import React from 'react'
import { ButtonContainer, Container, ContainerLeft, ContainerRight } from './subHeaderStyles';
import Headings from '../Headings/Headings';
import Button from '../Buttons/Button';

// Assets
import Icon from '../../images/icon-before.svg';

const SubHeader = () => {
    return (
        <Container>
            <ContainerLeft>
                <Headings heading="Transport Route Master" />
            </ContainerLeft>
            <ContainerRight>
                <ButtonContainer>
                    <Button
                        className='primary'
                        buttonText="Add New Route"
                    />
                </ButtonContainer>
                <ButtonContainer>
                    <Button
                        className='secondary'
                        buttonText="Order Routes"
                    />
                </ButtonContainer>
                <ButtonContainer>
                    <Button
                        className='secondary'
                        buttonText="Associated Options"
                        leftIcon={Icon}
                    />
                </ButtonContainer>

            </ContainerRight>
        </Container>
    )
}

export default SubHeader;