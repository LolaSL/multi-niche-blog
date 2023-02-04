import axios from 'axios';
axios.defaults.withCredentials = true;

export async function getUsers(usersData) {
  return await axios.post(
    'http://localhost:8090/api/v1/auth/users',
    usersData
  )
}

export async function getUserById(userData) {
  return await axios.post(
    'http://localhost:8090/api/v1/auth/users',
    usersData
  )
}
export async function onRegistration(registrationData) {
  return await axios.post(
    'http://localhost:9000/api/v1/auth/register',
    registrationData
  )
}

export async function onLogin(loginData) {
  return await axios.post('http://localhost:9000/api/v1/auth/login', loginData)
}

export async function onLogout() {
  return await axios.get('http://localhost:9000/api/v1/auth/logout')
}

