import styled from "styled-components";

export const ModuleBoxes = styled.div`
`;

export const ModuleBoxCol = styled.div`
    padding:13px 12px;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    border-bottom: 1px solid rgba(9, 30, 66, 0.14);
`;

export const ModuleBoxLeft = styled.div``;

export const ModuleBoxRight = styled.div`
    padding-left:12px;
    >h4{
        color: #000000;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 18px; /* 128.571% */
        margin-bottom:0px;
    }
    >span{
        color: #000000;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 12px; /* 100% */
    }
`;

export const NavBar = styled.ul`
 margin:0;
 padding:10px 0;
 list-style:none;
 display:flex;
 flex-direction:column;
 justify-content:flex-start;
 flex:1;
 max-height:calc(100vh - 200px);
 overflow:auto;
`;

export const NavBarItem = styled.li`
    padding:0px 14px;
    // border-bottom:1px solid #C1C7D0;
    &.active {
        >a{
            background-color: #E9F2FF;
            border-radius: 3px;
            padding: 8px;
            >span{
                color:${({ theme }) => theme. buttonPrimary};
                font-weight: 600;
            }
            >.inactive-icons{
                display:none;
            }
            >.active-icons{
                display:flex;
                width:20px;
            }           
        }
        >.sidebar-drop{
            li.active{
                a{
                    border-radius: 3px;
                    height:40px;
                    display:flex;
                    align-items:center;
                    justify-content:flex-start;
                    > span{
                        color:${({ theme }) => theme. buttonPrimary};
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
        padding:8px;
        >.active-icons{
            display:none;
        }
        >.inactive-icons{
            display:flex;
            width:20px;
        }
    }
    &:last-child{
        border-bottom:none;
    }
`;

export const NavBars = styled.ul`
    margin:20px 8px 0px ;
    padding:0px;
    list-style:none;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    flex:1;
    max-height:calc(100vh - 200px);
    overflow:auto;
`;

export const NavBarItems = styled.li`
    padding: 0px 14px 0px;
    &.active {
        >a{
            >span{
                color:${({ theme }) => theme. buttonPrimary};
                
            }
            >.inactive-icons{
                display:none;
            }
            >.active-icons{
                display:flex;
                width:20px;
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
                        color:${({ theme }) => theme. buttonPrimary};
                        font-weight: 600;
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
            width:20px;
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
    @media screen and (max-width: 1240px) {
        font-size:13px;
    }
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
    padding-bottom:11px;
 >a{
    text-decoration:none;
    padding:0 10px;
    >span{
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #000000;
        @media screen and (max-width: 1240px) {
            font-size:13px;
        }
    }
 }

`;

