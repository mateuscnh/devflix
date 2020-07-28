import React from 'react';

import { Container } from './styles.js';

import Logo from '../../assets/logo.png';

export default function Footer() {
    return (
        <Container>
            <img src={Logo} alt="" />
            <p>© 2020, @mateuscnh. All Rights Reserved.</p>
        </Container>
    );
}