export const dataFormChatSelector = (type) => {
  switch (type) {
    case 'name':
      return {
        name: '',
        secondName: '',
        paternalSurname: '',
        maternalSurname: ''
      }
    case 'date':
      return {
        date: '',
        month: '',
        year: ''
      }
    case 'contact':
      return {
        email: '',
        phone: ''
      }
    default:
      return {}
  }
}
