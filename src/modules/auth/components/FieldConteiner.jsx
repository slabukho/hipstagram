import React from 'react'
import { FieldContainerStyled } from './styled'

const FieldContainer = ({ error, label, message, children }) => {
    return (
        <FieldContainerStyled>
            <label>{label}</label>
            {children}
            {error && <p>{error.message || message}</p>}
        </FieldContainerStyled>
    )
}

export default FieldContainer