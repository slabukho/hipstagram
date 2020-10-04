import styled from 'styled-components'

const StyledWrapper = styled.main`
    height:100%;
    width: 100vw;
    background-color: ${props => props.theme.bgColor};
    display: table;
`;

export default StyledWrapper