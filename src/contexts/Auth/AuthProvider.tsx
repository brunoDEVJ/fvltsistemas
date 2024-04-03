import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { Usuario } from "../../types/User";
import { useApi } from "../../hooks/useApi";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const api = useApi();

  const logar = async (email: string, senha: string, cnpj: string ) => {
      const data= await api.logar(email, senha, cnpj)

    if(data.email && data.access_token){
      setUsuario(data.email)
      return true
    }
    return false
  };
  const deslogar = async () => {
    setUsuario(null)
  };

  return (
    <AuthContext.Provider value={{ usuario, logar, deslogar }}>
      {children}
    </AuthContext.Provider>
  );
};
