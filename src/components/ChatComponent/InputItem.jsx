import React from 'react'
import { StyledChatInput } from '../../styles/ChatComponent/InputItem'

const InputItem = ({ labelTitle }) => {
  return (
    <StyledChatInput placeholder={labelTitle} />
  )
}

export { InputItem }
