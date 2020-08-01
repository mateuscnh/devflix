import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import BoardContext from '../../utils/context';

import Category from '../../components/Category';
import NewCategory from '../../components/NewCategory';
import NewVideo from '../../components/NewVideo';

import { baseURL } from '../../utils/baseURL';

const Container = styled.div`
    padding: 50px 0;
    padding-left: 4%;
    min-height: 100vh;
`

export default function Home() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function loadCategories() {
            await fetch(`${baseURL}/categories?_embed=videos`)
                .then(response => response.json())
                .then(data => setCategories(data));
        }

        loadCategories();
    }, []);

    return (
        <BoardContext.Provider value={{ categories, setCategories }}>
            <Container>
                <NewCategory />
                <NewVideo />
                {categories &&
                    categories.map(category => (
                        <Category key={category.id} title={category.title} videos={category.videos} />
                    ))}
            </Container>
        </BoardContext.Provider>
    );
}