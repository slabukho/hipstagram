import styled from 'styled-components'


export const StyledButton = styled.button`
    ${props => props.theme.button.sizes.middle}
    background:${props => props.theme.background};
    border-radius: 10px;
    padding: 0;
    border: none;
    cursor: pointer;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: ${props => props.theme.bgInner};
    outline:none;
`;

