import styled from 'styled-components';

export const Container = styled.div` 
    position: relative; 
    cursor: pointer;

    width: 100%;

    transition: .1s;
   
    :hover :first-child{
        opacity: 1;   
    }
    
    img{
        border-radius: 6px;
        width: 300px;
        object-fit: cover;

        @media (max-width: 768px){
            width: 100%;                
        } 
    }
`;

export const Description = styled.div`
    padding: 10px 4%;

    opacity: 0;
    position: absolute;

    width: 300px;
    height: 100%;

    background-color: rgba(0, 0, 0, .8);
    border-radius: 4px;

    transition: .2s;  

    @media (max-width: 768px){
        width: 100%; 
        h1{
            font-size: 24px;
        }               
    }    
`;

