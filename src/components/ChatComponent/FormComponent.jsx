import React from 'react'
import { StyledForm } from '../../styles/ChatComponent/Form'
import { StyledFormComponent, StyledImg } from '../../styles/ChatComponent/FormComponent'
import { InputItem } from './InputItem'

const FormComponent = ({ dataSection, inputs, type }) => {
  return (
    <StyledFormComponent>
      <StyledImg src='https://cdn-icons-png.flaticon.com/512/773/773330.png' alt='bot-image' />
      <StyledForm>
        <h3>{dataSection}</h3>
        {inputs?.map((input) => {
          return <InputItem key={input} labelTitle={input} />
        })}
      </StyledForm>
      <div>Hola mundo</div>
    </StyledFormComponent>
  )
}

export { FormComponent }
