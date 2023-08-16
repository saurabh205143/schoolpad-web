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
    .toaster-container {
        background:transparent;
        color: #fff;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        padding:0px;
        margin:0px;
        border-radius:0px;
    }
    .Toastify__toast-body{
        padding:0px !important;
    }
    .Toastify__toast{
        padding:0px !important;
        margin-bottom:0px !important;
        box-shadow:none !important;
    }
    // .Toastify__progress-bar-theme--light{
    //     background:#000000;
    // }
`