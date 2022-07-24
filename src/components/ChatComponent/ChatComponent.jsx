import { useFormik } from 'formik'
import React from 'react'
import { FormBtn } from './FormBtn'
import { FormComponent } from './FormComponent'

const ChatComponent = () => {
  const personalData = ['Nombre', 'Segundo Nombre', 'Apellido Paterno', 'Apellido Materno']
  const dateOfBirth = ['Dia', 'Mes', 'Año']
  const contactData = ['Correo Electrónico', 'Teléfono Celular']

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
      <form onSubmit={formik.handleChange}>
        <FormComponent dataSection='¿Cuál es tu nombre?' inputs={personalData} type='name' />
        <FormComponent dataSection='¿Cuál es tu fecha de nacimiento?' inputs={dateOfBirth} type='date' />
        <FormComponent dataSection='Datos de Contacto' inputs={contactData} type='contact' />
        <FormBtn type='submit' formikConfig={formik} />
      </form>
    </>

  )
}

export { ChatComponent }
