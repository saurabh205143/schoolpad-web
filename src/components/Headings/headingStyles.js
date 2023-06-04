import { styled } from "styled-components";

export const MainHeadingText = styled.h1`
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeightBold};
    font-size: ${({ theme }) => theme.largeFont};
    line-height: 32px;
    color: ${({ theme }) => theme.darkColor};
    margin:0;
`;

export const SubHeading = styled.h2`
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeightBold};
    font-size: ${({ theme }) => theme.xmediumfont};
    color: ${({ theme }) => theme.darkColor};
    margin:0;
`;

export const SubHeadingText = styled.h2`
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeightSemiBold};
    font-size: ${({ theme }) => theme.mediumFont};
    line-height: 24px;
    color: ${({ theme }) => theme.darkColor};
    margin:0;
`;

export const SubHeadingTextSmall = styled.h3`
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeightSemiBold};
    font-size: ${({ theme }) => theme.smallFont};
    line-height: 24px;
    color: ${({ theme }) => theme.darkColor};
    margin:0;
`;

export const ParagraphText = styled.p`
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeightRegular};
    font-size: ${({ theme }) => theme.smallFont};
    line-height: 20px;
    color: ${({ theme }) => theme.darkColor};
    margin:0;
`;