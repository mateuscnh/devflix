import styled from 'styled-components';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const ChevronLeft = styled(FaChevronLeft)`
    height: 100%;
    padding: 0 12px;
    width: 40px; 

    position: absolute;
    z-index: 1;
    left: -40px;

    color: ${props => props.color};

    cursor: pointer;
    background-color: ${props => props.theme.colors.background};
    box-shadow: 10px 0 40px 2px #111;
    
    opacity: .2;
    transition: .2s;
    :hover{
        opacity: .8;
    }
`;

export const ChevronRight = styled(FaChevronRight)`
    height: 100%;
    padding: 0 12px;
    width: 40px;

    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;

    color: ${props => props.color};

    cursor: pointer;
    background-color: ${props => props.theme.colors.background};
    box-shadow: -10px 0 40px 2px #111;

    opacity: .2;
    transition: .2s;
    :hover{
        opacity: .8;
    }
`;