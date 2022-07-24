import { useFormik } from 'formik'
import React from 'react'
import { StyledForm } from '../../styles/ChatComponent/ChatComponent'
import { FormBtn } from './FormBtn'
import { FormComponent } from './FormComponent'

const ChatComponent = () => {
  const personalData = [
    { placeholder: 'Nombre', inputType: 'text', fieldName: 'name' },
    { placeholder: 'Segundo Nombre', inputType: 'text', fieldName: 'secondName' },
    { placeholder: 'Apellido Paterno', inputType: 'text', fieldName: 'paternalSurname' },
    { placeholder: 'Apellido Materno', inputType: 'text', fieldName: 'maternalSurname' }]

  const dateOfBirth = [
    { placeholder: 'Dia', inputType: 'number', min: 1, max: 31, fieldName: 'day' },
    { placeholder: 'Mes', inputType: 'number', min: 1, max: 12, fieldName: 'month' },
    { placeholder: 'Año', inputType: 'number', min: 1900, max: 2022, fieldName: 'year' }
  ]
  const contactData = [{ placeholder: 'Correo Electrónico', type: 'email', fieldName: 'email' }, { placeholder: 'Teléfono Celular', inputType: 'number', fieldName: 'phone' }]

  const formik = useFormik({
    initialValues: {
      name: '',
      secondName: '',
      paternalSurname: '',
      maternalSurname: '',
      day: '',
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
