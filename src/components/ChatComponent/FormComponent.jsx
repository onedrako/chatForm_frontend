import React from 'react'
import { StyledForm } from '../../styles/ChatComponent/Form'
import { StyledFormComponent, StyledImg } from '../../styles/ChatComponent/FormComponent'
import { InputItem } from './InputItem'

const FormComponent = () => {
  return (
    <StyledFormComponent>
      <StyledImg src='https://cdn-icons-png.flaticon.com/512/773/773330.png' alt='bot-image' />
      <StyledForm>
        <h3>¿Cual es tu nombre?</h3>
        <InputItem />
        <InputItem />
        <InputItem />
        <InputItem />
      </StyledForm>
    </StyledFormComponent>
  )
}

export { FormComponent }
