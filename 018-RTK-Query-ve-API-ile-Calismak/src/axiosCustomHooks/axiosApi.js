import axios from "axios"

const VITE_CAT_API_URL = import.meta.env.VITE_CAT_API_URL
const VITE_CAT_API_KEY = import.meta.env.VITE_CAT_API_KEY

export const axiosCatApi = axios.create({
  baseURL: VITE_CAT_API_URL,
  headers: {
    "x-api-key": VITE_CAT_API_KEY
  }
})
