import { styled } from "styled-components";

export const MainHeadingText = styled.h1`
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: ${({ theme }) => theme.darkColor};
    margin:0;
`;

export const SubHeadingText = styled.h2`
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: ${({ theme }) => theme.darkColor};
    margin:0;
`;

export const ParagraphText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    margin:0;
`;