import React, { useEffect, useState } from 'react';

import { Container } from './styles.js';

import Categories from '../../components/Categories';

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
            {categories.map(category => (
                <Categories key={category.id} title={category.title} data={category.id} />
            ))}
        </Container>
    );
}