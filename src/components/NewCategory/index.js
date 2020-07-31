import React, { useContext } from 'react';

import BoardContext from '../../pages/Home/context';

import { Container } from './styles';

import BlackFilter from '../../components/BlackFilter';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { baseURL } from '../../utils/baseURL';

export default function () {
    const { categories, setCategories } = useContext(BoardContext);

    async function handleSubmit(e) {
        e.preventDefault();

        const categoryName = document.querySelector('.categoryName');

        if (categoryName.value !== '') {
            const data = {
                title: `${categoryName.value}`
            }

            await fetch(`${baseURL}/categories`, {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(res => res.json())
                .then(data => setCategories([].concat(categories, data)))
                .catch(err => console.log(err))

            document.querySelector('.newCategory').style.display = 'none';
            categoryName.value = '';
        } else {
            alert('Informe algum nome');
        }
    }

    return (
        <BlackFilter className="newCategory" zIndex={2}>
            <Container>
                <h1>Nova Categoria</h1>
                <form onSubmit={handleSubmit}>
                    <Input className="categoryName" type="text" labelName="Nome" />
                    <Button type="submit" />
                </form>
            </Container>
        </BlackFilter>
    );
}