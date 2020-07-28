import React from 'react';

import { Container, Description } from './styles';

export default function CategoryItem({ data }) {
    return (
        <a href={data.url} target="_blanck">
            <Container>
                <Description>
                    <h1>{data.title}</h1>
                    <p>Player</p>
                </Description>
                <img src={data.imageURL} alt="" />
            </Container >
        </a>
    );
}