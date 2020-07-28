import React from 'react';

import { Container, Wrapper } from './styles.js';
import CategoryItem from '../CategoryItem';

export default function Categories(props) {
    return (
        <Container>
            <header><h1>{props.title}</h1></header>
            <Wrapper>
                {props.data.items.map(item =>
                    <CategoryItem key={item.id} data={item} />
                )}
            </Wrapper>
        </Container>
    );
} 