import styled from "styled-components";

export const NavBar = styled.ul`
 margin:0;
 padding:0px;
 list-style:none;
 display:flex;
 flex-direction:column;
 justify-content:flex-start;
 flex:1;
 max-height:calc(100vh - 200px);
 overflow:auto;
`;

export const NavBarItem = styled.li`
    padding:10px 14px;
    border-bottom:1px solid #C1C7D0;
    &.active {
        >a{
            >span{
                color:${({ theme }) => theme.blueColor};
            }
            >.inactive-icons{
                display:none;
            }
            >.active-icons{
                display:flex;
            }           
        }
        >.sidebar-drop{
            li.active{
                a{
                    background: #E9F2FF;
                    border-radius: 3px;
                    height:40px;
                    display:flex;
                    align-items:center;
                    justify-content:flex-start;
                    > span{
                        color:${({ theme }) => theme.blueColor};
                    }
                }
            }
        }
    }
    >a{
        text-decoration:none;
        height:40px;
        display:flex;
        align-items:center;
        width:100%;
        >.active-icons{
            display:none;
        }
        >.inactive-icons{
            display:flex;
        }
    }
    &:last-child{
        border-bottom:none;
    }
`;

export const LinkTitle = styled.span`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 32px;
    color:#091E42;
`;

export const InactiveIcon = styled.img`
    margin-right:10px;
`;

export const ActiveIcon = styled.img`
    margin-right:10px;
`;

export const SidebarDropDown = styled.ul`
    margin:0 0 0 30px;
    padding:0px;
    list-style:none;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;

`;

export const SidebarDropList = styled.li`
    padding-bottom:10px;
 >a{
    text-decoration:none;
    padding:0 10px;
    >span{
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #000000;
    }
 }

`;

