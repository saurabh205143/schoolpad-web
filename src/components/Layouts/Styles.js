import styled from "styled-components";

export const SLayout = styled.div`
    width:100%;
`

export const SMain = styled.div`
    width:100%;
`
export const Screen = styled.div`
    width:calc(100% - 246px);
    max-height:calc(100vh - 56px);
    position:relative;
    float:right;
    overflow:auto;
    height:100vh;
    @media screen and (max-width: 1240px) {
        width:calc(100% - 220px);
    }
`