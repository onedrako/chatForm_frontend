import React from 'react'
import { StyledInputsContainer } from '../../styles/ChatComponent/InputsContainer'
import { StyledFormComponent, StyledImg } from '../../styles/ChatComponent/FormComponent'
// import { InputItem } from './InputItem'
import { ChatInput, InputError } from '../../styles/ChatComponent/ChatInput'

const FormComponent = ({ dataSection, inputs, formikConfig }) => {
  return (
    <StyledFormComponent>
      <StyledImg src='https://cdn-icons-png.flaticon.com/512/773/773330.png' alt='bot-image' />
      <StyledInputsContainer>
        <h3>{dataSection}</h3>
        {inputs?.map((input) => {
          return (
            <div key={input.placeholder}>
              <ChatInput
                placeholder={input.placeholder}
                type={input.inputType}
                min={input.min}
                max={input.max}
                error={formikConfig.errors[input.placeholder]}
                {...formikConfig.getFieldProps(input.fieldName)}
              />
              {formikConfig.touched[input.fieldName] && formikConfig.errors[input.fieldName] && (
                <InputError>{formikConfig.errors[input.fieldName]}</InputError>
              )}
            </div>
          )
        })}
      </StyledInputsContainer>
    </StyledFormComponent>
  )
}

export { FormComponent }
