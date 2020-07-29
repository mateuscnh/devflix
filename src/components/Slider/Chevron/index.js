import React from 'react';
import { ChevronLeft, ChevronRight } from './styles';

export default function ({ direction, color, size, onClick }) {
    return (
        <>
            {direction === 'left' ?
                <ChevronLeft color={color} size={size} onClick={onClick} />
                :
                <ChevronRight color={color} size={size} onClick={onClick} />
            }
        </>
    );
}