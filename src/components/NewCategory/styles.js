import styled from 'styled-components';

export const Container = styled.div`
    padding: 50px;
    display: none;
    width: 510px;

    position: absolute;
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);

    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
    border-radius: 20px;
    box-shadow: 0 10px 30px 2px #000;

    form{
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        Input{
            width: 360px;
        }
    }

`;

