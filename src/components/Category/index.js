import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';

import { Container, Wrapper } from './styles.js';
import CategoryItem from './CategoryItem';
import Slider from '../Slider';

import api from '../../services/api';

export default function Category(props) {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        async function searchVideosByCategory() {
            const { data } = await api.get('/videos');

            const filterVideos = video => video.category_id === props.categoryId;
            setVideos(data.filter(filterVideos));
        }

        searchVideosByCategory();
    }, []);

    async function handleClick() {
        console.log('new')
    }

    return (
        <Container>
            <header>
                <h1>{props.title}</h1>
                <FaPlus className="addVideo" size={20} onClick={handleClick} />
            </header>
            <Wrapper>
                <Slider>
                    {videos.map(video =>
                        <CategoryItem key={video.id} data={video} />
                    )}
                </Slider>
            </Wrapper>
        </Container>
    );
}