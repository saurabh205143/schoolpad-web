import React, { useState } from 'react';
import { DefaultContainer, DefaultDescriptionContainer, DefaultHeaderFilters, DefaultIconContainer, TitleContainer } from './DefaultStyles';

// Assets
import DefaultIcon from '../../../../../images/default-arrow.svg';
import Headings from '../../../../../components/Headings/Headings';
import SubHeader from '../../../../../components/ScreensHeader/SubHeader';

const DefaultMappingScreen = ({ xtrasubHeading, description, showDefaultScreenHeader }) => {

  const [showRecords, setShowRecords] = useState(false);
  return (
    <>
      <DefaultHeaderFilters>
        {showDefaultScreenHeader &&
          <SubHeader
            type='header-filters'
            inputLabel1='Receipt No.'
            inputPlaceholder1='Enter purchase order no.'
            inputLabel2='Issue Date'
            inputPlaceholder2='Enter item name'
            showHeaderFilter={true}
            showSearchButtonRight={false}
            showPrimaryButton={false}
            getRecords={() => setShowRecords(!showRecords)}
          />
        }
      </DefaultHeaderFilters>
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
    </>
  )
}

export default DefaultMappingScreen;