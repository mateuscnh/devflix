import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

export const Container = styled.div`
    padding: 50px;
    width: 510px;

    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
    border-radius: 20px;
    box-shadow: 0 10px 20px 2px #000;

    form{
        Input{
            width: 100%;
        }
        button{
            margin-top: 36px;
            border-radius: 4px;
            width: 100%;
        }
        p{
            position: relative;
            top: 30px;
            left: 8px;
        }  
        
    }
    @media (max-width: 768px){
            width: 80%;

            h1{
                font-size: 22px;
            } 
            
            select, svg{
                width: 100%;
            }           
        }
`;

export const NewCategory = styled(FaPlus)`
    padding: 10px;
    position: relative;
    bottom: -13px;
    height: 38px;
    border-radius: 4px;
    width: 18%;
    background-color: ${props => props.theme.colors.primary};
    cursor: pointer;
    :hover{
        opacity: .8;
    }
`

export const Select = styled.select`
    margin-right: 2%;
    margin-top: 40px;
    font-size: 16px;
    padding: 6px;
    width: 80%;
    height: 40px;
    background: rgba(0, 0, 0, .5);
    border: none;   
    
    border-radius: 4px;
    outline: none;
    color: ${props => props.theme.colors.text};

    transition: .2s;

    :focus{
        background: rgba(0, 0, 0, 0);
        border: 2px solid ${props => props.theme.colors.primary};
        border-top: none;
    }

    option{
        background-color: ${props => props.theme.colors.background};
        :hover{
            background-color: ${props => props.theme.colors.primary};
        }
    }
`


