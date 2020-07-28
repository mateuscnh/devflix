import React from 'react';

import { Container } from './styles.js';
import Categories from '../../components/Categories';
import loadCategories from '../../services/data';

const categories = loadCategories();

export default function Home() {
    return (
        <Container>
            {categories.map(category =>
                <Categories key={category.id} title={category.title} data={category} />
            )}
        </Container>
    );
}