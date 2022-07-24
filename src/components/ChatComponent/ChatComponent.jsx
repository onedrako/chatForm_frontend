import { useFormik } from 'formik'
import React from 'react'
import { StyledForm } from '../../styles/ChatComponent/ChatComponent'
import { FormBtn } from './FormBtn'
import { FormComponent } from './FormComponent'

const ChatComponent = () => {
  const personalData = [
    { placeholder: 'Nombre', inputType: 'text' },
    { placeholder: 'Segundo Nombre', inputType: 'text' },
    { placeholder: 'Apellido Paterno', inputType: 'text' },
    { placeholder: 'Apellido Materno', inputType: 'text' }]

  const dateOfBirth = [
    { placeholder: 'Dia', inputType: 'number', min: 1, max: 31 },
    { placeholder: 'Mes', inputType: 'number', min: 1, max: 12 },
    { placeholder: 'Año', inputType: 'number', min: 1900, max: 2022 }
  ]
  const contactData = [{ placeholder: 'Correo Electrónico', type: 'email' }, { placeholder: 'Teléfono Celular', inputType: 'number' }]

  const formik = useFormik({
    initialValues: {
      name: '',
      secondName: '',
      paternalSurname: '',
      maternalSurname: '',
      date: '',
      month: '',
      year: '',
      email: '',
      phone: ''
    },
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <>
      <StyledForm onSubmit={formik.handleChange}>
        <FormComponent dataSection='¿Cuál es tu nombre?' inputs={personalData} type='name' formikConfig={formik} />
        <FormComponent dataSection='¿Cuál es tu fecha de nacimiento?' inputs={dateOfBirth} type='date' formikConfig={formik} />
        <FormComponent dataSection='Datos de Contacto' inputs={contactData} type='contact' formikConfig={formik} />
        <FormBtn type='submit' formikConfig={formik} />
      </StyledForm>
    </>

  )
}

export { ChatComponent }
