import React from 'react';

import { Container, Wrapper } from './styles.js';
import Item from './Item';
import Slider from '../Slider';

export default function Categories(props) {
    return (
        <Container>
            <header><h1>{props.title}</h1></header>
            <Wrapper>
                <Slider>
                    {props.data.items.map(item =>
                        <Item key={item.id} data={item} />
                    )}
                </Slider>
            </Wrapper>
        </Container>
    );
}