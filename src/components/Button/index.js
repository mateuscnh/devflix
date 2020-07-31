import React from 'react';
import styled from 'styled-components';

import { FaPlus } from 'react-icons/fa';

const Button = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.primary};
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
    outline: none;

    transition: .2s;

    :hover{
        opacity: .8;
    }
`

export default function (props) {
    return (
        <Button type={props.type}><FaPlus /></Button >
    );
}