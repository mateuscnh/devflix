import styled from 'styled-components';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const ChevronLeft = styled(FaChevronLeft)`
    height: 100%;
    padding: 0 4px; 

    position: absolute;
    z-index: 1;
    left: -30px;

    color: ${props => props.color};

    cursor: pointer;
    background-color: ${props => props.theme.colors.background};
    transform: initial;
    
    opacity: .2;
    transition: .2s;
    :hover{
        opacity: 1;
    }
`;

export const ChevronRight = styled(FaChevronRight)`
    height: 100%;
    padding: 0 4px; 

    position: absolute;
    z-index: 1;
    top: 0;
    right: -30px;

    color: ${props => props.color};
    transform: initial;

    cursor: pointer;
    background-color: ${props => props.theme.colors.background};

    opacity: .2;
    transition: .2s;
    :hover{
        opacity: 1;
    }
`;