import React, { useContext } from 'react';

import BoardContext from '../../pages/Home/context';

import { Container, Select, NewCategory } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import api from '../../services/api';

export default function (props) {
    const { categories } = useContext(BoardContext);

    async function handleSubmit(e) {
        e.preventDefault();
        const videoTitle = document.querySelector('.videoTitle');
        const videoURL = document.querySelector('.VideoURL');
        const videoCategory = document.querySelector('.videoCategory');
        const videoID = videoURL.value.split('=').slice(1);

        const category = await api.get(`/categories?title=${videoCategory.value}`)

        const data = {
            category_id: category.data[0].id,
            title: `${videoTitle.value}`,
            url: `https://www.youtube.com/watch?v=${videoID}`,
            imageURL: `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`
        }

        console.log(data)


        // await api.post('/videos', data).then((res) => {
        //     newData = Object.assign(res.data, data);
        // }).catch((err) => console.log(err));

        // props.setVideos([].concat(props.videos, newData));

        // nameCategory.value = '';
        document.querySelector('.newVideo').style.display = 'none';
    }

    function handleClick() {
        console.log(1)
        console.log(document.querySelector('.newCategory'))
        document.querySelector('.newCategory').style.display = 'block';
    }

    return (
        <Container className="newVideo">
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
                <Input className="VideoURL" type="text" labelName="Url" />
                <Button type="submit"></Button>
            </form>
        </Container>
    );
}