import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

export const Navbar = styled.nav`
    width: 100%;
    padding: 0 4%;
    height: 60px;

    display: flex;
    justify-content: space-between;

    background-color: ${props => props.theme.colors.header};

    img{
        height: 30px;
        margin: 15px 0;

        cursor: pointer;
    }
`;

export const NewButton = styled(FaPlus)`
    margin: 14px 0;
    padding: 6px;

    color: #fff;
        
    background-color: ${props => props.theme.colors.primary};
    border-radius: 50%;

    transition: .2s;

    cursor: pointer;

    :hover{
        opacity: .8;
    }
`