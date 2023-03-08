import axios from 'axios'
import {useLoaderStore} from '../stores/LoaderStore'

export default async function getAllProducts() {
  const loadingStore = useLoaderStore()
  try {
    loadingStore.loading()
    const res = await axios.get('https://fakestoreapi.com/products?limit=12')
    return res.data
  } catch (err) {
  } finally {
    loadingStore.endLoading()
  }
}
