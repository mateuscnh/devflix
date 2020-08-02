import React from 'react';

import { Container } from './styles.js';
import CategoryItem from './CategoryItem';
import Slider from '../Slider';

export default function Category(props) {
    return (
        <Container>
            <header>
                <h1>{props.title}</h1>
            </header>
            <Slider slidesToShow={4} speed={300}>
                {props.videos &&
                    (props.videos).reverse().map(video =>
                        <CategoryItem key={video.id} data={video} />
                    )
                }
            </Slider>
        </Container>
    );
}