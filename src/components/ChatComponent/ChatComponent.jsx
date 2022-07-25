import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { CompleteInfo, ConfirmPreview, Form, PreviewInfo } from '../../styles/ChatComponent/ChatComponent'
import { calculateDays } from '../../utils/calculateDays'
import { months } from '../../utils/months'
import { FormBtn } from './FormBtn'
import { FormComponent } from './FormComponent'

const ChatComponent = () => {
  const personalData = [
    { placeholder: 'Nombre', inputType: 'text', fieldName: 'name' },
    { placeholder: 'Segundo Nombre', inputType: 'text', fieldName: 'secondName' },
    { placeholder: 'Apellido Paterno', inputType: 'text', fieldName: 'paternalSurname' },
    { placeholder: 'Apellido Materno', inputType: 'text', fieldName: 'maternalSurname' }]

  const dateOfBirth = [
    { placeholder: 'Dia: 25', inputType: 'number', min: 1, max: 31, fieldName: 'day' },
    { placeholder: 'Mes: 01', inputType: 'number', min: 1, max: 12, fieldName: 'month' },
    { placeholder: 'Año: 1999', inputType: 'number', min: 1900, max: 2022, fieldName: 'year' }
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
    },
    validationSchema: Yup.object({
      name: Yup.string().required('El nombre es requerido'),
      secondName: Yup.string(),
      paternalSurname: Yup.string().required('El apellido paterno es requerido'),
      maternalSurname: Yup.string().required('El apellido materno es requerido'),
      year: Yup.number().required('El año es requerido').min(1900, 'El año debe ser mayor a 1900').max(2022, 'El año debe ser menor a 2022'),
      month: Yup.number().required('El mes es requerido').min(1, 'Elige un mes válido').max(12, 'Elige un mes válido'),
      day: Yup.number().required('El dia es requerido').min(1, 'Elige un dia valido').max(31, 'Elige un dia valido').test('day', 'Elige un dia valido', value => value <= calculateDays(formik.values.month, formik.values.year)),
      email: Yup.string().required('El correo electrónico es requerido').email('El correo electrónico no es válido'),
      phone: Yup.number().test('len', 'Ingresa un número de teléfono valido (10 dígitos)', val => val && val.toString().length === 10)
    })
  })

  return (
    <>
      <Form onSubmit={formik.handleChange}>
        <FormComponent dataSection='¿Cuál es tu nombre?' inputs={personalData} type='name' formikConfig={formik} errors={formik.erorrs} />
        {formik.values.name && formik.values.paternalSurname && formik.values.maternalSurname &&
          <PreviewInfo>{`${formik.values.name} ${formik.values.secondName} ${formik.values.paternalSurname} ${formik.values.maternalSurname}`}</PreviewInfo>}

        <FormComponent dataSection='¿Cuál es tu fecha de nacimiento?' inputs={dateOfBirth} type='date' formikConfig={formik} />
        {formik.values.day && formik.values.month && formik.values.year &&
          <PreviewInfo>{`${formik.values.day} de ${months[formik.values.month]} de ${formik.values.year}`}</PreviewInfo>}

        <FormComponent dataSection='Datos de Contacto' inputs={contactData} type='contact' formikConfig={formik} />
        {formik.values.email && formik.values.phone &&
          <PreviewInfo>{`${formik.values.email} ${formik.values.phone}`}</PreviewInfo>}

        {Object.keys(formik.errors).length === 0 &&
          <ConfirmPreview>Si tus datos son correctos por favor continuemos</ConfirmPreview>}

        <FormBtn type='submit' formikConfig={formik} />

        {Object.keys(formik.errors).length === 0 && formik.values.name &&
          <CompleteInfo>
            <p>{` Fecha de Nacimiento: ${formik.values.day} de ${months[formik.values.month]} de ${formik.values.year}`}</p>
            <p>{`Correo Electrónico: ${formik.values.email}`}</p>
            <p>{`Teléfono Celular: ${formik.values.phone}`}</p>
            <p>{`Nombre: ${formik.values.name} ${formik.values.secondName} ${formik.values.paternalSurname} ${formik.values.maternalSurname}`}</p>
          </CompleteInfo>}
      </Form>
    </>

  )
}

export { ChatComponent }
