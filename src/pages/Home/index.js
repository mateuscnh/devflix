import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import BoardContext from '../../utils/context';

import Category from '../../components/Category';
import NewCategory from '../../components/NewCategory';
import NewVideo from '../../components/NewVideo';

import Loading from '../../components/Loading';

import { baseURL } from '../../utils/baseURL';

const Container = styled.div`
    padding: 50px 0;
    padding-left: 4%;
    min-height: 60vh;
`

export default function Home() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function loadCategories() {
            await fetch(`${baseURL}/categories?_embed=videos`)
                .then(response => response.json())
                .then(data => setTimeout(() => setCategories(data), 2000));
        }

        loadCategories();
    }, []);

    return (
        <BoardContext.Provider value={{ categories, setCategories }}>
            <Container>
                <NewCategory />
                <NewVideo />
                {categories.length === 0 &&
                    <Loading />
                }
                {categories &&
                    categories.map(category => (
                        <Category key={category.id} title={category.title} videos={category.videos} />
                    ))}
            </Container>
        </BoardContext.Provider>
    );
}