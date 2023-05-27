import React from 'react'
import { MainHeadingText,  ParagraphText, SubHeadingText } from './headingStyles';

const Headings = ({heading,subHeading,description}) => {
  return (
    <>
        <MainHeadingText>
            {heading}
        </MainHeadingText>
        <SubHeadingText>
            {subHeading}
        </SubHeadingText>
        <ParagraphText>
            {description}
        </ParagraphText>
    </>
  )
}

export default Headings;