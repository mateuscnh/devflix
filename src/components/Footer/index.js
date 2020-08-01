import React from 'react';
import styled from 'styled-components';
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaGithub } from 'react-icons/fa';

import Logo from '../../assets/logo.png';

const Container = styled.footer`
    color: #fff;
    height: 100px;
    text-align: center;
    margin-top: 50px;

    img{
        margin-bottom: 6px;
        height: 24px;
    }
    p{
        font-size: 14px;
    }

    .social{
        margin-top: 4px;
        a{
            margin: 10px;
            transition: .2s;
            :hover{
                opacity: .5;
            }
        }

    }
`;

export default function Footer() {
    return (
        <Container>
            <img src={Logo} alt="" />
            <div className="social">
                <a href="https://github.com/mateuscnh" rel="noopener noreferrer" target="_blank"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/mateus-cunha-a886141a5/" rel="noopener noreferrer" target="_blank"><FaLinkedinIn /></a>
                <a href="https://www.instagram.com/mateuscnh/" rel="noopener noreferrer" target="_blank"><FaInstagram /></a>
                <a href="https://www.facebook.com/MateusCnh/" rel="noopener noreferrer" target="_blank"><FaFacebookF /></a>
            </div>
        </Container>
    );
}
