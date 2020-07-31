import React from 'react';
import { FaPlus } from 'react-icons/fa';

import { Container, Button } from './styles';
import Input from '../../components/Input';

import api from '../../services/api';

export default function (props) {
    async function handleClick(e) {
        e.preventDefault();
        const nameCategory = document.querySelector('.nameCategory');

        const data = {
            "title": `${nameCategory.value}`
        }

        let newData = '';

        await api.post('/categories', data).then((res) => {
            newData = Object.assign(res.data, data);
        }).catch((err) => console.log(err));

        props.setCategories([].concat(props.categories, newData));

        nameCategory.value = '';
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