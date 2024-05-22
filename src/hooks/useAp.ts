import axios from "axios";


export const useAxi = (token: string | null) =>{
 return axios.create({
    baseURL: "http://localhost:5001",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}