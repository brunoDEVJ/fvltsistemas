import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { Usuario } from "../../types/User";
import { useApi } from "../../hooks/useApi";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const api = useApi();

  useEffect(() => {
    const validarToken = async () => {
      const token = localStorage.getItem("AuthToken");
      if (token) {
        try {
          console.log('token')
          const data: Usuario = await api.validarToken(token);
          if (!usuario) setUsuario(data);
        } catch (error) {
          setToken("");
          setUsuario(null);
        }
      }
    };
    validarToken();
  }, [api, usuario]);

  const logar = async (email: string, senha: string, cnpj: string) => {
    const { data, access_token }: { data: Usuario; access_token: string } =
      await api.logar(email, senha, cnpj);
      console.log(data);
      console.log(access_token);
    if (data && access_token) {
      setUsuario(data);
      setToken(access_token);
      return true;
    }
    return false;
  };
  const deslogar = async () => {
    setUsuario(null);
    setToken("");
  };

  const setToken = (token: string) => {
    localStorage.setItem("AuthToken", token);
  };

  return (
    <AuthContext.Provider value={{ usuario, logar, deslogar }}>
      {children}
    </AuthContext.Provider>
  );
};
