import React from 'react';
import { FaPlus } from 'react-icons/fa';

import { Container, Button } from './styles';
import Input from '../../components/Input';

export default function () {
    function handleClick(e) {
        e.preventDefault();
        document.querySelector('.newCategory').style.display = 'none';
    }

    return (
        <Container className="newCategory">
            <h1>Nova Categoria</h1>
            <form onSubmit={handleClick}>
                <Input type="text" labelName="Nome" />
                <Button type="submit" ><FaPlus /></Button>
            </form>
        </Container>
    );
}