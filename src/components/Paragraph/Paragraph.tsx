import React from 'react'
import styled, { StyledComponent } from 'styled-components';

import C from '../../constants';

const {
    colors,
    fonts
} = C

const paragraph: StyledComponent<React.FC<React.HTMLProps<HTMLParagraphElement>>, {}> = styled.p`
    color: ${colors.BLACK};
    padding: 5px;
    font-size: ${fonts.STANDARD};
    line-height: 1.5;
    text-align: justify;
`;

export default paragraph;