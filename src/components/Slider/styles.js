import styled from 'styled-components';

import Slick from 'react-slick';

export default styled(Slick)`

    .slick-arrow::before{
        display: block;
        font-size: 26px;
        height: 100%;
        background-color: red;
    }
`;