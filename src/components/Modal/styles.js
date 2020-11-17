import styled, { keyframes } from "styled-components";

const hide = keyframes`
    from{
        z-index:1;
        transform:scale(1);
        opacity:0.5;
    }to{
        z-index:-1;
        transform:scale(0);
        opacity:0;
    }
`
export const Modalbck = styled.div`
    position:fixed;
    top : 0;
    bottom : 0;
    left : 0;
    right : 0;
    background-color : rgba(0,0,0,0.6);
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:0;
    animation: ease-in .5s;
    ${({open}) => open &&`
        opacity:1;
        z-index:2;
        animation: show .2s;
        transform: scale(1);
        }
        @keyframes show {
        from{
        transform: scale(0);
            opacity:0;
            z-index:-1;
        } to{
        transform: scale(1);
            opacity: 1;
            z-index:2;
        }
    `}
    ${({open}) => !open &&`
        z-index:-1;
        opacity:0;
        animation: hide .25s;      
        transform: scale(0);
        }@keyframes hide {
        from{
            z-index:2;
        transform: scale(1);
            opacity:1;
        } to{
            z-index:-1;
        transform: scale(0);
            opacity: 0;
        }
    `}
`

