import styled from "styled-components";

export const MegaMenu = styled.div`
    width: 100%;
    float: left;
`;

export const MegaMenuCol = styled.div`
    width: 100%;
    float: left;
`;

export const MegaMenuNavigation = styled.div`
    position: absolute;
    width: 290px;
    left: 0px;
    top: 0px;
    background: #F4F5F7;
    float: left;
`;

export const MegaMenuNav = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
`;

export const MegaMenuNavList = styled.li`
    display: flex;
    flex-direction: column;
    list-style: none;
        >a{
            display: flex;
            align-item: centre;
            justify-content: space-between;
            text-decoration: none;
            >span{
                font-style: normal;
                font-weight: ${({ theme }) => theme.fontWeightRegular};
                font-size: ${({ theme }) => theme.mediumFont};
                color:${({ theme }) => theme.darkColor};
            }
            >.inactive-icons{
                display:none;
            }
            >.active-icons{
                display:flex;
            }           
        }
`;




