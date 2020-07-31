import styled, { keyframes } from 'styled-components';

const animation = keyframes`
    to{
        opacity: 1;
    } 
`

export const Container = styled.div`
    margin-top: 40px;  

    transition: .2s;
    opacity: 0;
    animation: ${animation} 2s 0s both;  
    
    header{
        height: 20px;
        display: flex;
        align-items: center;
        color: ${props => props.theme.colors.text};
    }
    h1{
        font-size: 20px;
        padding: 6px;
        color: #fff;       
    }
    .addVideo{
        margin-left: 50px;
        cursor: pointer;

        transition: .2s;

        opacity: .5;

        :hover{
            opacity: .4;
            transform: scale(.9);
        }
    }
`;

export const Wrapper = styled.div`
    margin-top: 20px;
`;