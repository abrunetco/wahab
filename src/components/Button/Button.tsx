import styled, { StyledComponent } from 'styled-components';

import C from '../../constants';

export type ButtonElement = StyledComponent<React.FC<React.HTMLProps<HTMLButtonElement>>, {}>;

export const PrimaryButton: ButtonElement = styled.button({
    border: `2px solid ${C.colors.PRIMARY}`,
    backgroundColor: `${C.colors.PRIMARY}`,
    color: C.colors.WHITE,
    padding: `10px`,
    borderRadius: `4px`,
    cursor: `pointer`,
    transition: `${C.transitions.STANDARD} all`,
    fontSize: `${C.fonts.STANDARD}`,

    // &:hover {
    //     background-color: ${C.colors.SECONDARY},
    //     border-color: ${C.colors.SECONDARY},
    // }
})

export const SecondaryButton: ButtonElement = styled(PrimaryButton)`
    background-color: transparent;
    color: ${C.colors.PRIMARY};

    &:hover {
        background-color: transparent;
        color: ${C.colors.SECONDARY};
    }
`;