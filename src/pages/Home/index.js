import React, { useEffect, useState } from 'react';

import { Container } from './styles.js';

import BoardContext from './context';

import Category from '../../components/Category';
import NewCategory from '../../components/NewCategory';
import NewVideo from '../../components/NewVideo';

export default function Home() {
    const [categories, setCategories] = useState([]);
    // const [videos, setVideos] = useState([]);

    useEffect(() => {
        async function loadCategories() {
            const URL = 'http://localhost:3000/categories?_embed=videos';

            await fetch(URL)
                .then(response => response.json())
                .then(data => setCategories(data));
        }

        loadCategories();
    }, []);

    return (
        <BoardContext.Provider value={{ categories, setCategories }}>
            <Container className="home">
                <NewCategory />
                <NewVideo />
                {categories.map(category => (
                    <Category key={category.id} title={category.title} videos={category.videos} />
                ))}
            </Container>
        </BoardContext.Provider>
    );
}