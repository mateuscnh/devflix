import styled, { keyframes } from 'styled-components';

const animation = keyframes`
    to{
        opacity: 1;
    } 
`

export const Container = styled.div`
    margin-top: 40px;
    padding-left: 20px;  

    transition: .2s;
    opacity: 0;
    animation: ${animation} 2s 0s both;  
    
    header{
        margin-bottom: 10px;
        color: ${props => props.theme.colors.text};
    }
    h1{
        font-size: 20px;
        padding: 6px;
        color: #fff;       
    }
`;