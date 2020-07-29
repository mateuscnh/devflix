import React from 'react';

import Slider from './styles';

import Chevron from './Chevron';

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
                        slidesToShow: 2,
                        slidesToScroll: 2,
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