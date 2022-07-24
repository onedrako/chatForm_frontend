import React from 'react'
import { StyledInputsContainer } from '../../styles/ChatComponent/InputsContainer'
import { StyledFormComponent, StyledImg } from '../../styles/ChatComponent/FormComponent'
// import { InputItem } from './InputItem'
import { StyledChatInput } from '../../styles/ChatComponent/InputItem'

const FormComponent = ({ dataSection, inputs, type, formikConfig }) => {
  return (
    <StyledFormComponent>
      <StyledImg src='https://cdn-icons-png.flaticon.com/512/773/773330.png' alt='bot-image' />
      <StyledInputsContainer>
        <h3>{dataSection}</h3>
        {inputs?.map((input) => {
          return (
            <StyledChatInput
              key={input.placeholder}
              placeholder={input.placeholder}
              type={input.inputType}
              min={input.min}
              max={input.max}
              {...formikConfig.getFieldProps(input.fieldName)}
            />
          )
        })}
      </StyledInputsContainer>
      <div>Hola mundo</div>
    </StyledFormComponent>
  )
}

export { FormComponent }
