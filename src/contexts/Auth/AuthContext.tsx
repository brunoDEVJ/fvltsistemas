import {createContext} from 'react'
import { Usuario } from '../../types/User'

export type AuthContextType = {
  usuario: Usuario | null ;
  logar: (email:string, senha: string, cnpj: string) => Promise<boolean>;
  deslogar: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);