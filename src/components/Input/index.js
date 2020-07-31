import React from 'react';

import { Container, Input, Label } from './styles';

export default function ({ labelName, type, className, disabled }) {
    return (
        <Container>
            <Input className={className} type={type} disabled={disabled}></Input>
            <Label>{labelName}</Label>
        </Container>
    );
}