import React from 'react';
import { FaPlus } from 'react-icons/fa';

import Logo from '../../assets/logo.png';

import { Navbar } from './styles';

export default function Header() {
    return (
        <Navbar>
            <img src={Logo} alt="" />
            <a href="https://github.com/mateuscnh" target="_blanck"><FaPlus size={20} /></a>
        </Navbar>
    );
}