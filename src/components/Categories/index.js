import React from 'react';
import Slider from "react-slick";

import { Container, Wrapper } from './styles.js';
import CategoryItem from '../CategoryItem';

export default function Categories(props) {
    return (
        <Container>
            <header><h1>{props.title}</h1></header>
            <Wrapper>
                <Slider
                    infinite={false}
                    speed={300}
                    slidesToShow={4}
                    slidesToScroll={4}
                    responsive={[{
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: false,
                        }
                    }]}
                >
                    {props.data.items.map(item =>
                        <CategoryItem key={item.id} data={item} />
                    )}
                </Slider>
            </Wrapper>
        </Container>
    );
} 