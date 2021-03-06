import React from 'react';

import { Container, Description } from './styles';

export default function CategoryItem({ data }) {
    return (
        <a href={data.url} rel="noopener noreferrer" target="_blank">
            <Container>
                <Description>
                    <h1>{data.title}</h1>
                </Description>
                <img src={data.imageURL} alt="" />
            </Container >
        </a>
    );
}