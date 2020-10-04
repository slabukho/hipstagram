import React from 'react'
import { StyledInputAuth, StyledInputHeader } from './styled'


const Input = React.forwardRef((props, ref) => {
    return (
        <StyledInputAuth
            ref={ref}
            {...props}
        ></StyledInputAuth>
    )
})
export default Input