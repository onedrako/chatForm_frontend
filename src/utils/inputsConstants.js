export const personalData = [
  { placeholder: 'Nombre', inputType: 'text', fieldName: 'name' },
  { placeholder: 'Segundo Nombre', inputType: 'text', fieldName: 'secondName' },
  { placeholder: 'Apellido Paterno', inputType: 'text', fieldName: 'paternalSurname' },
  { placeholder: 'Apellido Materno', inputType: 'text', fieldName: 'maternalSurname' }]

export const dateOfBirth = [
  { placeholder: 'Dia: 25', inputType: 'number', min: 1, max: 31, fieldName: 'day' },
  { placeholder: 'Mes: 01', inputType: 'number', min: 1, max: 12, fieldName: 'month' },
  { placeholder: 'Año: 1999', inputType: 'number', min: 1900, max: 2022, fieldName: 'year' }
]
export const contactData = [{ placeholder: 'Correo Electrónico', type: 'email', fieldName: 'email' }, { placeholder: 'Teléfono Celular', inputType: 'number', fieldName: 'phone' }]
