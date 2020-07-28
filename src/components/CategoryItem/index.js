import React from 'react';

import { Container } from './styles';

export default function CategoryItem({ data }) {
    return (
        <Container>
            <a href={data.url} target="_blanck"><img src={data.imageURL} alt="" /></a>
        </Container >
    );
}