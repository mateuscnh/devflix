import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeAnimation = keyframes`  
    to{
        opacity: 1;
    } 
`

export const BlackFilter = styled.div`
    display: none;
    place-items: center;
    position: fixed;
    z-index: ${props => props.zIndex};
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .5);
    opacity: 0;
    animation: ${fadeAnimation} .3s 0s both;
`;

export default function ({ className, zIndex, children }) {
    function handleClick(e) {
        if (typeof (e.target.className) !== 'object') {
            if (e.target.className) {
                if ((e.target.className).indexOf(className) !== -1) {
                    document.querySelector(`.${className}`).style.display = 'none';
                    if (className === 'newVideo') {
                        document.querySelector('body').style.overflow = 'auto';
                    }
                }
            }
        }
    }
    return (
        <BlackFilter className={className} zIndex={zIndex} onClick={handleClick}>
            {children}
        </BlackFilter>
    );
}