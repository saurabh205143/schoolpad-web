import React from 'react';
import Layout from '../../../../../components/Layouts/Layout';
import SubHeader from '../../../../../components/ScreensHeader/SubHeader';
import ExportHeader from '../../../../../components/ScreensHeader/ExportHeader';
import { DefaultContainer, DefaultDescriptionContainer, DefaultIconContainer, TitleContainer } from './DefaultStyles';

// Assets
import DefaultIcon from '../../../../../images/default-arrow.svg';
import Headings from '../../../../../components/Headings/Headings';

const DefaultMappingScreen = () => {
  return (
    <>
       <SubHeader
        heading='Student Mapping'
       />
       <ExportHeader smallHeading={'All Records'} />
       <DefaultContainer>
            <DefaultIconContainer>
                <img src={DefaultIcon} alt='Icon' />
                <TitleContainer>
                    <Headings xtrasubHeading='Select the type of Mapping' />
                </TitleContainer>
            </DefaultIconContainer>
            <DefaultDescriptionContainer>
                    <Headings
                        description="Select a mapping type to filter out students 
                        and map them with their bus routes and stops and allocate 
                        bus fees accordingly." 
                    />
                </DefaultDescriptionContainer>
       </DefaultContainer>
    </>
  )
}

export default DefaultMappingScreen;