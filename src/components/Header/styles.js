import styled from 'styled-components';

export const Navbar = styled.nav`
    position: fixed;
    width: 100%;
    padding: 0 2%;
    height: 60px;

    display: flex;
    justify-content: space-between;

    background-color: ${props => props.theme.colors.header};

    img{
        height: 30px;
        margin: 15px 0;
    }

    a{
        margin: 14px 0;
        padding: 6px;

        color: #fff;
        
        background-color: ${props => props.theme.colors.primary};
        border-radius: 50%;

        transition: .2s;

        :hover{
            opacity: .8;
        }
    }
`;