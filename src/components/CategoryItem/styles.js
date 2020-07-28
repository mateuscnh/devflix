import styled from 'styled-components';

export const Container = styled.div` 
    position: relative; 
    cursor: pointer;

    transition: .1s;
   
    :hover :first-child{
        opacity: 1;
    }
    
    img{
        border-radius: 4px;
        width: 300px;
        object-fit: cover;    
    }
`;

export const Description = styled.div`
    padding: 10px;

    opacity: 0;
    position: absolute;

    width: 300px;
    height: 100%;

    background-color: rgba(0, 0, 0, .8);
    border-radius: 4px;

    transition: .2s;  
`;

