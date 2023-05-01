import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

import { H1 } from '../Headline/Headline';

import C from '../../constants';

const {colors} = C

export interface ModalHeaderProps {
    className?: string;
    title: string;
}

const ModalHeader: React.FC<ModalHeaderProps> = props => {
    return (
        <div className={props.className}>
            <H1>{props.title}</H1>
        </div>
    );
};

const styledModalHeader: StyledComponent<typeof ModalHeader, {}> = styled(ModalHeader) `
    border-bottom: 1px solid ${colors.PRIMARY};
`;

export default styledModalHeader;