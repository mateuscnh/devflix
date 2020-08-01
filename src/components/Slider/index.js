import React from 'react';
import styled from 'styled-components';

import Chevron from './Chevron';
import Slick from 'react-slick';

const Slider = styled(Slick)`

    .slick-arrow::before{
        display: block;
        font-size: 26px;
        height: 100%;
        background-color: red;
    }
`;

export default function ({ children }) {
    return (
        <Slider {...{
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            speed: 300,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false,
                    }
                }
            ],
            nextArrow: <Chevron direction={'right'} color={'#fff'} size={24} />,
            prevArrow: <Chevron direction={'left'} color={'#fff'} size={24} />
        }}>
            {children}
        </Slider>
    );
}