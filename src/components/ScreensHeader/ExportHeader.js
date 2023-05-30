import React from 'react'
import { ButtonContainer, ContainerLeft, ContainerRight, ExportContainer, ExportHeadings } from './subHeaderStyles';
import Headings from '../Headings/Headings';
import LinkButton from '../Buttons/LinkButton';

// Assets
import PrintIcon from '../../images/print-icon.svg';
import Excelicon from '../../images/excel-icon.svg';
import Button from '../Buttons/Button';

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
        </ExportContainer>
    )
}

export default ExportHeader;