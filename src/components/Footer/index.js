import React from 'react';
import styled from 'styled-components';

import Logo from '../../assets/logo.png';

const Container = styled.footer`
    color: #fff;
    height: 100px;
    text-align: center;
    margin-top: 50px;

    img{
        margin-bottom: 10px;
        height: 30px;
    }
`;

export default function Footer() {
    return (
        <Container>
            <img src={Logo} alt="" />
            <p>© 2020, @mateuscnh. All Rights Reserved.</p>
        </Container>
    );
}