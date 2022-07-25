// Dependencies
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

// Utils
import { calculateDays } from '../../utils/calculateDays'
import { months } from '../../utils/months'
import { safeHTML } from '../../utils/sanitizeObject'
import { personalData, contactData, dateOfBirth } from '../../utils/inputsConstants'

// Services
import Users from '../../services/users.service'

// Components
import { FormComponent } from './FormComponent'
import { FormBtn } from './FormBtn'

// StyledComponents
import { CompleteInfo, ConfirmPreview, DbErrorMessage, Form, PreviewInfo } from '../../styles/ChatComponent/ChatComponent'

const ChatComponent = () => {
  const [successfullySent, setSuccessfullySent] = useState(false)
  const [error, setError] = useState(false)
  const service = new Users()

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
    onSubmit: async values => {
      const preparedData = service.prepareUserData(values)
      const safeData = safeHTML(preparedData)
      try {
        await service.postUser(safeData)
        setSuccessfullySent(true)
      } catch (err) {
        setError(true)
        window.scroll({
          top: 100,
          right: 100,
          behavior: 'smooth'
        })
        return
      }
      setSuccessfullySent(true)
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

  if (!successfullySent || error) {
    return (
      <>
        <Form onSubmit={formik.handleChange}>
          {error &&
            <DbErrorMessage>
              <p>Ha ocurrido un error al enviar los datos :(, inténtelo de nuevo</p>
            </DbErrorMessage>}

          <FormComponent dataSection='¿Cuál es tu nombre?' inputs={personalData} formikConfig={formik} errors={formik.erorrs} />
          {formik.values.name && formik.values.paternalSurname && formik.values.maternalSurname &&
            <PreviewInfo>{`${formik.values.name} ${formik.values.secondName} ${formik.values.paternalSurname} ${formik.values.maternalSurname}`}</PreviewInfo>}

          <FormComponent dataSection='¿Cuál es tu fecha de nacimiento?' inputs={dateOfBirth} formikConfig={formik} />
          {formik.values.day && formik.values.month && formik.values.year &&
            <PreviewInfo>{`${formik.values.day} de ${months[formik.values.month]} de ${formik.values.year}`}</PreviewInfo>}

          <FormComponent dataSection='Datos de Contacto' inputs={contactData} formikConfig={formik} />
          {formik.values.email && formik.values.phone &&
            <PreviewInfo>{`${formik.values.email} ${formik.values.phone}`}</PreviewInfo>}

          {Object.keys(formik.errors).length === 0 && formik.values.name &&
            <ConfirmPreview>Si tus datos son correctos por favor continuemos</ConfirmPreview>}

          <FormBtn action={formik.handleSubmit} text='Iniciar' />

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

  if (successfullySent) {
    return (
      <Form>
        <FormComponent dataSection='Muchas gracias, tú registro ha sido exitoso :D' />
        <FormBtn
          action={() => {
            setError(false)
            formik.resetForm()
            setSuccessfullySent(false)
          }}
          text='Comenzar nuevo registro'
        />
      </Form>
    )
  }
}

export { ChatComponent }
