import axios from 'axios'
import {useLoaderStore} from '../stores/LoaderStore'

export default async function auth(name, pass) {
  const loadingStore = useLoaderStore()
  try {
    loadingStore.loading()
    const res = await axios.post('https://fakestoreapi.com/auth/login', {
      username: name,
      password: pass
    })
    return res.data
  } catch (err) {
  } finally {
    loadingStore.endLoading()
  }
}
