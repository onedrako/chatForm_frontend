import axios from 'axios'

class Users {
  async postUser (data) {
    await axios.post('https://shrouded-hamlet-36571.herokuapp.com/api/v1/users', data)
  }

  prepareUserData (data) {
    const prepareDate = {
      name: data.name,
      paternalSurname: data.paternalSurname,
      maternalSurname: data.maternalSurname,
      dateOfBirth: new Date(`${data.month}/${data.day}/${data.year}`),
      email: data.email,
      phone: String(data.phone)
    }
    if (data.secondName) {
      prepareDate.secondName = data.secondName
    }
    return prepareDate
  }
}

export default Users
