import styled from 'styled-components';

export const Container = styled.div`
    margin-right: 16px;
    height: 100%;

    cursor: pointer;

    transition: .1s;

    :hover{
        transform: scale(1.12);
        box-shadow: 0 10px 30px 2px #111111;
    }
    
    img{
        border-radius: 4px;
        height: 100%;
        object-fit: cover;   
    }
`;