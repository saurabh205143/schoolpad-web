import React from 'react'
import { MainHeadingText,  ParagraphText, SubHeadingText, SubHeadingTextSmall } from './headingStyles';

const Headings = ({heading,subHeading, smallHeading,description}) => {
  return (
    <>
        <MainHeadingText>
            {heading}
        </MainHeadingText>
        <SubHeadingText>
            {subHeading}
        </SubHeadingText>
        <SubHeadingTextSmall>
          {smallHeading}
        </SubHeadingTextSmall>
        <ParagraphText>
            {description}
        </ParagraphText>
    </>
  )
}

export default Headings;