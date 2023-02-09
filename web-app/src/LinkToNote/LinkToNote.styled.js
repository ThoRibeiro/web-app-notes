import styled from "styled-components";
import { Link as _Link } from "react-router-dom";

export const Link = styled(_Link) `
    padding: 20px 14px;
    font-weight: bold;
    display: block;
    font-weight: bold;
    text-decoration: none;
    color: inherit;
    background-color: ${({ theme }) => theme.asideBackgroundColor};
    
    &:hover{
        background-color: ${({ theme }) => theme.mainBackgroundColor};
    }
`;