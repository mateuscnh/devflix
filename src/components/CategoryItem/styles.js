import styled from 'styled-components';

export const Container = styled.div` 
    position: relative; 
    cursor: pointer;

    transition: .1s;

    :hover{
        transform: scale(1.02);
        box-shadow: 0 10px 30px 2px #111111;
    }
    
    img{
        border-radius: 4px;
        width: 300px;
        object-fit: cover;   
    }
`;

// export const Description = styled.div`
//     position: absolute;
//     top: 0;
//     background-color: red;
//     height: 100%;
//     width: 150px;
// `;