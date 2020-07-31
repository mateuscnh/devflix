import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 40px;
    position: relative;  

`
export const Label = styled.label`
    font-size: 16px;
    position: absolute;
    opacity: .6;
    top: 8px;
    left: 12px;
    pointer-events: none;
    transition: .2s;
`

export const Input = styled.input`
    padding: 12px;
    height: 40px;
    background: rgba(0, 0, 0, .5);
    border: none;   
    
    border-radius: 4px;
    outline: none;
    color: ${props => props.theme.colors.text};

    transition: .1s;

    :focus{
        background: rgba(0, 0, 0, 0);
        border: 2px solid ${props => props.theme.colors.primary};
        border-top: none;
    }

    :focus + ${Label} {
        transform: scale(.9) translate(-6px, -36px);   
    }
`