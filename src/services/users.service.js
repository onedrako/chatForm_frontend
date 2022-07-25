import axios from 'axios'
// import config from '../../config'

// const apiUrl = config.apiUrl

class Users {
  postUser (data) {
    axios.post('http://localhost:3000/api/v1/users/', data)
  }

  getUser () {
    return console.log('getUser')
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
