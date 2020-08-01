import styled from 'styled-components';

export const Container = styled.div`
    padding: 50px;
    width: 510px;

    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
    border-radius: 20px;
    box-shadow: 0 10px 20px 2px #000;

    form{
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        Input{
            width: 360px;
        }
    }

    @media (max-width: 768px){
        width: 80%;
        h1{
            font-size: 22px;
        }
        form{
            display: block;

            Input, button{
                border-radius: 4px;
                width: 100%;
            }
            button{
                margin-top: 14px;
            }
        }          
    }
`;



