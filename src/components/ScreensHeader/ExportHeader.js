import React from 'react'
import { ButtonContainer, ContainerLeft, ContainerRight, ExportContainer, ExportHeadings } from './subHeaderStyles';
import Headings from '../Headings/Headings';

// Assets
import Button from '../Buttons/Button';

const ExportHeader = ({ smallHeading, smallHeding2, Excelicon, PrintIcon, isChecked }) => {
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
                                buttonText='Delete Store'
                                className='delete'
                            />
                        
                    </ButtonContainer>
                    <ButtonContainer>
                        <Button
                            onlyIcon={Excelicon}
                            className={'only-icon-button'}
                            tooltiptext='Excel'
                        />
                    </ButtonContainer>
                    <ButtonContainer>
                        <Button
                            onlyIcon={PrintIcon}
                            className={'only-icon-button'}
                            tooltiptext='Print'
                        />
                    </ButtonContainer>
                </ContainerRight>
            }
        </ExportContainer>
    )
}

export default ExportHeader;