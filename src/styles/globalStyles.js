import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        margin:0;
        box-sizing:border-box;
    }

    body{
        background : ${({theme}) => theme.bg2};
        color : ${({theme}) => theme.text};
        font-family: 'Source Sans Pro', sans-serif;
    }
    .toast-message {
        background:  #00875A;
        color: #fff;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        padding: 12px;
        border-radius:0px;
    }
`