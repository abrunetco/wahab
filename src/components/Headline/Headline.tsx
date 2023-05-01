import styled, { StyledComponent } from 'styled-components';

import C from '../../constants';

export const H1: StyledComponent<React.FC<React.HTMLProps<HTMLHeadingElement>>, {}> = styled.h1`
    color: ${C.colors.PRIMARY};
    padding: 10px 0;
    font-size: ${C.fonts.LARGE};
    margin: 0;
`;