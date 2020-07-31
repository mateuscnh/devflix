import React from 'react';
import { FaPlus } from 'react-icons/fa';

import { Container, Button } from './styles';
import Input from '../../components/Input';

import api from '../../services/api';

export default function () {
    async function handleClick(e) {
        e.preventDefault();
        const nameCategory = document.querySelector('.nameCategory').value;

        const data = {
            "title": `${nameCategory}`
        }

        await api.post('/categories', data).catch((err) => console.log('Error:', err));

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