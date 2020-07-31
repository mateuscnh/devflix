import React, { useEffect, useState } from 'react';

import { Container, Wrapper } from './styles.js';
import CategoryItem from './CategoryItem';
import Slider from '../Slider';

import api from '../../services/api';

export default function Categories(props) {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        async function searchVideosByCategory() {
            const response = await api.get('/videos');

            const filterVideos = video => video.category_id === props.data;
            setVideos(response.data.filter(filterVideos));
        }

        searchVideosByCategory();
    }, [])

    return (
        <Container>
            <header><h1>{props.title}</h1></header>
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