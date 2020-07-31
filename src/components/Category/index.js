import React from 'react';

import { Container, Wrapper } from './styles.js';
import CategoryItem from './CategoryItem';
import Slider from '../Slider';

export default function Category(props) {
    return (
        <Container>
            <header>
                <h1>{props.title}</h1>
            </header>
            <Wrapper>
                <Slider>
                    {props.videos &&
                        props.videos.map(video =>
                            <CategoryItem key={video.id} data={video} />
                        )
                    }
                </Slider>
            </Wrapper>
        </Container>
    );
}