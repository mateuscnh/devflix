import React from 'react';
import styled, { keyframes } from 'styled-components';

const SpinAnimate = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

const Container = styled.div`
position: absolute;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%); 
`

const Loader = styled.div`
    border: 6px solid #1f1f1f;
    border-top: 6px solid ${props => props.theme.colors.primary};
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: ${SpinAnimate} 1s linear infinite;
`

export default function () {
    return (
        <Container>
            <Loader />
        </Container>
    );
}