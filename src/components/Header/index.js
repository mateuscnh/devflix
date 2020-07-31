import React from 'react';

import Logo from '../../assets/logo.png';

import { Navbar, NewButton } from './styles';

export default function Header() {
    function handleClick() {
        document.querySelector('.newVideo').style.display = 'grid';
        document.querySelector('body').style.overflow = 'hidden';
    }

    return (
        <Navbar>
            <img src={Logo} alt="Logo" />
            <NewButton size={30} onClick={handleClick} />
        </Navbar>
    );
}