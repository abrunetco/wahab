import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

import { PrimaryButton, SecondaryButton } from '../Button/Button';

export interface ModalFooterProps {
    className?: string;
    saveButtonClickHandler: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
}

const ModalFooter: React.FC<ModalFooterProps> = props => {
    return (
        <div className={props.className}>
            <PrimaryButton onClick={props.saveButtonClickHandler}>Save</PrimaryButton>
            <SecondaryButton>Cancel</SecondaryButton>
        </div>
    );
};

const styledModalFooter: StyledComponent<typeof ModalFooter, {}> = styled(ModalFooter) `
    display: flex;
    flex-direction: row-reverse;

    > ${PrimaryButton} {
        margin-left: 10px;
    }
`;

export default styledModalFooter;