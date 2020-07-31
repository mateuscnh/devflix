import React, { useState } from 'react';

import { Container, Input, Label } from './styles';

export default function ({ labelName, type, className, disabled }) {
    const [hasValue, setHasValue] = useState({});

    function handleChange(e) {
        if (e.target.value !== '') {
            setHasValue({ value: true });
        } else {
            setHasValue({ value: false });
        }
    }

    return (
        <Container>
            <Input className={className} hasValue={hasValue} onChange={handleChange} type={type} disabled={disabled}></Input>
            <Label>{labelName}</Label>
        </Container>
    );
}