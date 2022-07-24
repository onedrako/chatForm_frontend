import React from 'react'
import { StyledChatInput } from '../../styles/ChatComponent/InputItem'

const InputItem = ({ data }) => {
  console.log(data)
  return (
    <StyledChatInput placeholder={data.placeholder} type={data.inputType} min={data.min} max={data.max} />
  )
}

export { InputItem }
