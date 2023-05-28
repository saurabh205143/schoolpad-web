import React from 'react'
import { ButtonContainer, ContainerLeft, ContainerRight, ExportContainer, ExportHeadings } from './subHeaderStyles';
import Headings from '../Headings/Headings';
import LinkButton from '../Buttons/LinkButton';

// Assets
import PrintIcon from '../../images/print-icon.svg';
import Excelicon from '../../images/excel-icon.svg';

const ExportHeader = () => {
    return (
        <ExportContainer>
            <ContainerLeft>
                <ExportHeadings>
                    <Headings smallHeading='All Routes ' />
                </ExportHeadings>
                <ExportHeadings>
                    <Headings smallHeading='(202 Records) ' />
                </ExportHeadings>
            </ContainerLeft>
            <ContainerRight>
                <ButtonContainer>
                    <LinkButton
                        onlyIcon={Excelicon}
                    />
                </ButtonContainer>
                <ButtonContainer>
                    <LinkButton
                        onlyIcon={PrintIcon}
                    />
                </ButtonContainer>
            </ContainerRight>
        </ExportContainer>
    )
}

export default ExportHeader;