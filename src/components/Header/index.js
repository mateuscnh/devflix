import React from 'react';

import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';

import { Navbar, NewButton } from './styles';

export default function Header() {
    function handleClick() {
        document.querySelector('.newCategory').style.display = 'block';
    }

    return (
        <Navbar>
            <Link to="/"><img src={Logo} alt="" /></Link>
            <NewButton size={30} onClick={handleClick} />
        </Navbar>
    );
}