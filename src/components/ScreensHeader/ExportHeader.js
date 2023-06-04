import React from 'react'
import { ButtonContainer, ContainerLeft, ContainerRight, ExportContainer, ExportHeadings } from './subHeaderStyles';
import Headings from '../Headings/Headings';
import LinkButton from '../Buttons/LinkButton';

// Assets
import Button from '../Buttons/Button';

const ExportHeader = ({smallHeading,smallHeding2,Excelicon,PrintIcon}) => {
    return (
        <ExportContainer>
            <ContainerLeft>
                <ExportHeadings>
                    <Headings smallHeading={smallHeading} />
                </ExportHeadings>
                <ExportHeadings>
                    <Headings smallHeading={smallHeding2} />
                </ExportHeadings>
            </ContainerLeft>
            {Excelicon && PrintIcon &&
                <ContainerRight>
                    <ButtonContainer>
                        <Button
                            onlyIcon={Excelicon}
                            className={'only-icon-button'}
                        />
                    </ButtonContainer>
                    <ButtonContainer>
                        <Button
                            onlyIcon={PrintIcon}
                            className={'only-icon-button'}
                        />
                    </ButtonContainer>
                </ContainerRight>
            }
        </ExportContainer>
    )
}

export default ExportHeader;