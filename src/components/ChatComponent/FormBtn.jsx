import React from 'react'
import { StyledFormBtn } from '../../styles/ChatComponent/FormBtn'

const FormBtn = ({ formikConfig }) => {
  return (
    <StyledFormBtn onClick={formikConfig.handleSubmit} type='button'>Iniciar</StyledFormBtn>
  )
}

export { FormBtn }
