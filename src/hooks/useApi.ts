import axios from "axios";

const api = axios.create({
  // baseURL: "https://backend-vltsistemas.onrender.com",
  // baseURL: process.env.REACT_APP_API_KEY,
  baseURL: "http://localhost:5001",
});

export const useApi = () => ({
  validarToken: async (token: string | null) => {
    const api2 = axios.create({
      baseURL: "http://localhost:5001",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await api2.get("/auth/verify");
    return response.data;
  },
  logar: async (EMAIL: string, SENHA: string, CNPJ: string) => {
    const response = await api.post("/auth/login", { EMAIL, SENHA, CNPJ });
    console.log(response)
    return response.data;
  },
  deslogar: async () => {},
});
