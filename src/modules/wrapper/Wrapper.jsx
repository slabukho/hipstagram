import React from 'react'
import StyledWrapper from './styled'


const Wrapper = ({ children }) => {
    return (
        <StyledWrapper >
            {children}
        </StyledWrapper>
    )
}

export default Wrapper