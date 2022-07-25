import React from 'react'
import { StyledFormBtn } from '../../styles/ChatComponent/FormBtn'

const FormBtn = ({ action, text }) => {
  return (
    <StyledFormBtn onClick={() => action()} type='button'>{text}</StyledFormBtn>
  )
}

export { FormBtn }
