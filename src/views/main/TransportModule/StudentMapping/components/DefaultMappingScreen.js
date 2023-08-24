import React, { useState } from 'react';
import { DefaultContainer, DefaultDescriptionContainer, DefaultIconContainer, TitleContainer } from './DefaultStyles';

// Assets
import DefaultIcon from '../../../../../images/default-arrow.svg';
import Headings from '../../../../../components/Headings/Headings';

const DefaultMappingScreen = ({ xtrasubHeading, description, showDefaultScreenHeader }) => {

  return (
    <>
      <DefaultContainer>
        <DefaultIconContainer>
          <img src={DefaultIcon} alt='Icon' />
          <TitleContainer>
            <Headings xtrasubHeading={xtrasubHeading} />
          </TitleContainer>
        </DefaultIconContainer>
        <DefaultDescriptionContainer>
          <Headings
            description={description}
          />
        </DefaultDescriptionContainer>
      </DefaultContainer>

      <>
    </>
    </>
  )
}

export default DefaultMappingScreen;