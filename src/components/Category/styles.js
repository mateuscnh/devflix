import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 26px;
    
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
    .newVideo{
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
    margin-top: 30px;
`;