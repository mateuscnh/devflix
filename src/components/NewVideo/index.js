import React from 'react';

import { Container, Select } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import api from '../../services/api';

export default function (props) {
    async function handleClick(e) {
        e.preventDefault();
        const nameCategory = document.querySelector('.nameCategory');

        const data = {
            "title": `${nameCategory.value}`
        }

        let newData = '';

        // await api.post('/categories', data).then((res) => {
        //     newData = Object.assign(res.data, data);
        // }).catch((err) => console.log(err));

        // props.setCategories([].concat(props.categories, newData));

        // nameCategory.value = '';
        document.querySelector('.newVideo').style.display = 'none';
    }

    return (
        <Container className="newVideo">
            <h1>Novo Vídeo</h1>
            <form onSubmit={handleClick}>
                <Input type="text" labelName="Título" />
                <Input type="text" labelName="Url" />
                <p>Categoria</p>
                <Select>
                    {props.categories.map(category => (
                        <option key={category.id}>{category.title}</option>
                    ))}
                </Select>
                <Button type="submit" ></Button>
            </form>
        </Container>
    );
}