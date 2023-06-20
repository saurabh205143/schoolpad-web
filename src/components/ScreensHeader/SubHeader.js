import React, { useEffect, useRef, useState } from 'react'
import { ButtonContainer, Container, ContainerLeft, ContainerRight, DescriptionText, GetRecordsContainer, RecordBox, VerticalContainer } from './subHeaderStyles';
import Headings from '../Headings/Headings';
import Button from '../Buttons/Button';

// Assets
import Icon from '../../images/icon-before.svg';
import SearchIcon from '../../images/search-icon.svg';
import Input from '../Inputs/Input';
import { styled } from 'styled-components';
import CustomDrop from '../MainHeader/Components/SubComponents/CustomDrop';

export const DropContianer = styled.div`
    position:absolute;
    right:10px;
    z-index:99;
    top:41px;
`;

// Hook
function useOnClickOutside(ref, buttonRef, handler) {
    useEffect(
        () => {
            const listener = (event) => {
                // Do nothing if clicking ref's element or descendent elements
                if (!ref.current || ref.current.contains(event.target) || (buttonRef && buttonRef.current.contains(event.target))) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },
        // Add ref and handler to effect dependencies
        // It's worth noting that because passed in handler is a new ...
        // ... function on every render that will cause this effect ...
        // ... callback/cleanup to run every render. It's not a big deal ...
        // ... but to optimize you can wrap handler in useCallback before ...
        // ... passing it into this hook.
        [ref, handler]
    );
}

const options = [
    {
        value: 1,
        label: "Leanne Graham"
    },
    {
        value: 2,
        label: "Ervin Howell"
    }
];

const SubHeader = ({ onClick, type, heading }) => {

    const [showAssociateDrop, setShowAssociateDrop] = useState(false);

    const ref = useRef();
    const buttonRef = useRef();

    useOnClickOutside(ref, buttonRef, () => setShowAssociateDrop(false));

    if (type === 'horizontal') {
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
                        <div ref={buttonRef}>
                            <Button
                                className='secondary'
                                buttonText="Associated Options"
                                leftIcon={Icon}
                                onClick={() => setShowAssociateDrop(!showAssociateDrop)}
                            />
                        </div>
                        {/* Associate Drop Down */}
                        {showAssociateDrop &&
                            <DropContianer ref={ref}>
                                <CustomDrop type='associatedoptions' />
                            </DropContianer>
                        }
                    </ButtonContainer>
                </ContainerRight>
            </Container>
        )
    } else {
        return (
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