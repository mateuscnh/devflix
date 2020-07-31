import React from 'react';

import { Container, Input, Label } from './styles';

export default function ({ labelName, type }) {
    return (
        <Container>
            <Input className="nameCategory" type={type}></Input>
            <Label>{labelName}</Label>
        </Container>
    );
}