import axios from 'axios'

export function login(data){
  return dispatch => {
    return axios.post('/api/auth', data).then(res => {
      const token = res.data.token
      localStorage.setItem('jwtToken', token)
      setAuthorizationToken(token)
    })
  }
}

export function setAuthorizationToken(token) {
  if(token) {
    axios.defaults.headers.common['Authorization'] = `Barrera ${token}`
  }else{
    delete axios.defaults.headers.common['Authorization']
  }
}