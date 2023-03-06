import axios from 'axios'

export default async function auth(name, pass) {
  const res = await axios.post('https://fakestoreapi.com/auth/login', {
    username: name,
    password: pass
  })
  return res.data
}
