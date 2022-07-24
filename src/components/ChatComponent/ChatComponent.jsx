import React from 'react'
import { FormComponent } from './FormComponent'

const ChatComponent = () => {
  const personalData = ['Nombre', 'Segundo Nombre', 'Apellido Paterno', 'Apellido Materno']
  const dateOfBirth = ['Dia', 'Mes', 'Año']
  const contactData = ['Correo Electrónico', 'Teléfono Celular']

  return (
    <>
      <FormComponent dataSection='¿Cuál es tu nombre?' inputs={personalData} />
      <FormComponent dataSection='¿Cual es tu fecha de nacimiento?' inputs={dateOfBirth} />
      <FormComponent dataSection='Datos de Contacto' inputs={contactData} />
    </>

  )
}

export { ChatComponent }
