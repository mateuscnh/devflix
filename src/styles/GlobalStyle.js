import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
        outline: none;
    }
    body{
        overflow-x: hidden;
        background-color: ${props => props.theme.colors.background};
    }
    a{
        color: inherit;
    }
`