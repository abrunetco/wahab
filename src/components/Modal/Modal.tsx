import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';
import Paragraph from '../Paragraph/Paragraph';

import C from '../../constants';

const {colors} = C

export interface ModalProps {
    className?: string;
    title: string;
    text: string;
    saveButtonClickHandler: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
}

const Modal: React.FC<ModalProps> = props => {
    return (
        <div className={props.className}>
            <ModalHeader title={props.title} />
            <Paragraph>{props.text}</Paragraph>
            <ModalFooter
                saveButtonClickHandler={props.saveButtonClickHandler}
            />
        </div>
    );
};

const styledModal: StyledComponent<React.FC<ModalProps>, {}> = styled(Modal) `
    border: 1px solid ${colors.GRAY};
    border-radius: 5px;
    box-shadow: 0 0 10px -2px ${colors.GRAY};
    width: 600px;
    padding: 20px;
    box-sizing: border-box;
    background-color: ${colors.WHITE};
`;

export default styledModal;