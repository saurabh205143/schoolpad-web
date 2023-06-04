import React, { useState } from 'react'
import { ButtonContainer, Container, ContainerLeft, ContainerRight, DescriptionText, GetRecordsContainer, RecordBox, VerticalContainer } from './subHeaderStyles';
import Headings from '../Headings/Headings';
import Button from '../Buttons/Button';

// Assets
import Icon from '../../images/icon-before.svg';
import SearchIcon from '../../images/search-icon.svg';
import Input from '../Inputs/Input';

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

const SubHeader = ({onClick,type,heading}) => {

    if(type === 'horizontal'){
        return (
            <Container type='horizontal'>
                <ContainerLeft>
                    <Headings heading={heading} />
                </ContainerLeft>
                <ContainerRight>
                    <ButtonContainer>
                        <Input
                          leftIcon={SearchIcon}
                          placeholder={'Search route by stop, Vehicle etc'}
                          name='search'
                         />
                    </ButtonContainer>
                    <ButtonContainer>
                        <Button
                            className='primary'
                            buttonText="Add New Route"
                            onClick={onClick}
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
    } else{
        return(
            <VerticalContainer>
                <ContainerLeft>
                    <Headings heading={heading} />
                </ContainerLeft>
                <DescriptionText>
                    <Headings
                        description={'Please select the type of data on which you want to add mapping below. You can choose class wise, route wise, admission number wise etc'} 
                    />
                </DescriptionText>
                <GetRecordsContainer>
                    <RecordBox>
                        <Input
                            type='select'
                            placeholder={'Mapping Type'}
                            options={options}
                        />
                    </RecordBox>
                    <Button
                        className='primary'
                        buttonText="Get Records"
                    />
                </GetRecordsContainer>
            </VerticalContainer>
        )
    }

    
}

export default SubHeader;