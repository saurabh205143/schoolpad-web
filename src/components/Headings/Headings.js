import React from 'react'
import { MainHeadingText,  ParagraphText, SubHeading, SubHeadingText, SubHeadingTextSmall } from './headingStyles';

const Headings = ({heading,subHeading, xtrasubHeading, smallHeading,description}) => {
  return (
    <>
    {heading &&
        <MainHeadingText>
            {heading}
        </MainHeadingText>
    }
    {xtrasubHeading &&
        <SubHeading>
          {xtrasubHeading}
        </SubHeading>
    }
    {subHeading &&
        <SubHeadingText>
            {subHeading}
        </SubHeadingText>
    }
    {smallHeading &&
        <SubHeadingTextSmall>
          {smallHeading}
        </SubHeadingTextSmall>
    }
    {description &&
        <ParagraphText>
            {description}
        </ParagraphText>
    }
    </>
  )
}

export default Headings;