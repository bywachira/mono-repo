import styled from "styled-components";

enum VARIANT {
    PRIMARY,
    SECONDARY
}

interface IProps {
    variant?: VARIANT,
    hasIcon?: boolean
}

export const Button: any = styled.button<IProps>`
    margin: 8px;
    border-radius: ${props => props.theme.borderRadius};
    ${props => {
        switch (props.variant) {
            case VARIANT.SECONDARY:
                return `
          color: ${props.theme.palette.secondary.contrastText};
          background-color: ${props.theme.palette.secondary.main};
        `;
            case VARIANT.PRIMARY:
            default:
                return `
          color: ${props.theme.palette.primary.contrastText};
          background-color: ${props.theme.palette.primary.main};
        `;
        }
    }}
    padding: 8px 16px;
    min-width: 160px;
    min-height: 40px;
    max-width: auto;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: bold;
    transition: .3s all;

    &:hover {
        opacity: 0.84;
    }
`