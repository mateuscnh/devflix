import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';

import { Navbar, NewButton } from './styles';

export default function Header() {
    return (
        <Navbar>
            <Link to="/"><img src={Logo} alt="" /></Link>
            <Link to="/new"><NewButton size={30} /></Link>
        </Navbar>
    );
}