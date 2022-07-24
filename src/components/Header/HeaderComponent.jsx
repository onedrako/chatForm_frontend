import React from 'react'
import { StyledHeader } from '../../styles/Header/Header'

const HeaderComponent = () => {
  return (
    <StyledHeader>
      <h2>Titulo del Formulario</h2>
      <img alt='clock-image' src='https://cdn-icons-png.flaticon.com/512/2471/2471594.png' />
      <div>
        <img src='https://cdn-icons-png.flaticon.com/512/1842/1842869.png' alt='timer-image' height='15px' />
        <p>En menos de 5 minutos</p>
      </div>
    </StyledHeader>
  )
}

export default HeaderComponent
