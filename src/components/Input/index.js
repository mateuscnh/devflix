import React, { useState } from 'react';

import { Container, Input, Label } from './styles';

export default function ({ labelName, type, className, disabled }) {
    const [hasValueInput, setValueInput] = useState({});

    function handleChange(e) {
        if (e.target.value !== '') {
            setValueInput({ value: true });
        } else {
            setValueInput({ value: false });
        }
    }

    return (
        <Container>
            <Input className={className} onChange={handleChange} hasValue={hasValueInput} type={type} disabled={disabled}></Input>
            <Label>{labelName}</Label>
        </Container>
    );
}