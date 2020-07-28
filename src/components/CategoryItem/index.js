import React from 'react';

import { Container, Description } from './styles';

export default function CategoryItem({ data }) {
    return (
        <Container>
            <Description>
                <h1>{data.title}</h1>
                <p>Player</p>
            </Description>
            <a href={data.url} target="_blanck"><img src={data.imageURL} alt="" /></a>
        </Container >
    );
}