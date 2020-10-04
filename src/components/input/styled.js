import styled from 'styled-components'

export const StyledInputAuth = styled.input`
    width: 350px;
    height: 50px;
    background: ${props => props.theme.input.color};
    opacity: 0.8;
    border: ${props => props.theme.border};
    box-sizing: border-box;
    border-radius: 10px;
    outline:none;
    color:${props => props.theme.inputTextColor};
`;


export const StyledInputHeader = styled(StyledInputAuth)`
width: 297px;
height: 28.5px;
padding: 5px 5px 5px 40px;
background-size: 25px;
font-size: 20px;
opacity: 1;
position: absolute;
top: 50%;
left: 35px;
transform: translate(0, -50%);
`;


