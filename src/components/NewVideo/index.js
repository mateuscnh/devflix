import React, { useContext } from 'react';

import BoardContext from '../../utils/context';

import { Container, Select, NewCategory } from './styles';

import BlackFilter from '../../components/BlackFilter';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { baseURL } from '../../utils/baseURL';
import clearInputs from '../../utils/clearInputs';

export default function () {
    const { categories, setCategories } = useContext(BoardContext);

    async function handleSubmit(e) {
        e.preventDefault();

        const videoTitle = document.querySelector('.videoTitle');
        const videoURL = document.querySelector('.VideoURL');
        const videoCategory = document.querySelector('.videoCategory');

        if (validateFields(videoTitle, videoURL)) {
            const videoID = videoURL.value.split('v=').slice(1)[0].split('&')[0];

            const category = [];

            await fetch(`${baseURL}/categories?title=${videoCategory.value}`)
                .then(res => res.json())
                .then(data => category.push(data));

            const data = {
                categoryId: category[0][0].id,
                title: `${videoTitle.value}`,
                url: `https://www.youtube.com/watch?v=${videoID}`,
                imageURL: `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`
            }

            await fetch(`${baseURL}/videos`, {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(async data => {
                    const newCategories = await categories.map(category => {
                        if (category.id === data.categoryId) {
                            if (category.videos) {
                                category.videos.push(data)
                            } else {
                                category.videos = [].concat([], data);
                            }
                        }
                        return category;
                    });
                    setCategories(newCategories);
                })
                .catch(err => console.log(err))

            document.querySelector('.newVideo').style.display = 'none';
            document.querySelector('body').style.overflow = 'auto';

            clearInputs();
        } else {
            alert('Preencha todos os dados corretamente!');
        }
    }

    function validateFields(videoTitle, videoURL) {
        return videoTitle.value !== '' && isUrlValid(videoURL.value);
    }

    function isUrlValid(userInput) {
        const url = userInput.match(/(http(s)?:\/\/.)?(www\.)?(youtube)\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        return url !== null;
    }

    function handleClick() {
        document.querySelector('.newCategory').style.display = 'grid';
    }

    return (
        <BlackFilter className="newVideo" zIndex={1}>
            <Container >
                <h1>Novo Vídeo</h1>
                <form onSubmit={handleSubmit}>
                    <p>Categoria</p>
                    <Select className="videoCategory">
                        {categories.map(category => (
                            <option key={category.id}>{category.title}</option>
                        ))}
                    </Select>
                    <NewCategory onClick={handleClick} />
                    <Input className="videoTitle" type="text" labelName="Título" />
                    <Input className="VideoURL" type="text" labelName="URL" />
                    <Button type="submit"></Button>
                </form>
            </Container>
        </BlackFilter>
    );
}