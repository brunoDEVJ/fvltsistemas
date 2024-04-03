import axios from 'axios'

const api = axios.create({
  baseURL: "https://backend-vltsistemas.onrender.com",
  // baseURL: process.env.REACT_APP_API_KEY,
})

export const useApi = () =>({
    validarToken: async (token: string) =>{
      api.interceptors.request.use((config :any) =>{
      config.headers.Authorization = `Bearer ${token}`
      })
      const response = await api.get('/users/user')
      return response.data
    },
    logar: async (email: string , senha: string, cnpj: string  ) =>{
      const response = await api.post('/auth/login', {email, senha, cnpj})
      return response.data
    },
    deslogar: async () =>{
      const response = await api.get('/')
      return response.data
    }


})