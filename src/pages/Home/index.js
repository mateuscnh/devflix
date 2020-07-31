import React, { useEffect, useState } from 'react';

import { Container } from './styles.js';

import Category from '../../components/Category';
import NewCategory from '../../components/NewCategory';
import NewVideo from '../../components/NewVideo';

import api from '../../services/api';

export default function Home() {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        async function loadCategories() {
            const response = await api.get('/categories');
            setCategories(response.data);
        }

        loadCategories();
    }, []);

    return (
        <Container>
            <NewCategory categories={categories} setCategories={setCategories} />
            <NewVideo categories={categories} />
            {categories.map(category => (
                <Category key={category.id} title={category.title} categoryId={category.id} />
            ))}
        </Container>
    );
}