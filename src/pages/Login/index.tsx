import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import {  useNavigate } from "react-router-dom";

export const Login = () => {
  const [cnpj, setCnpj] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const manejarLogar = async (e:any) => {
    e.preventDefault();
    if (cnpj && email && senha) {
      try {
        const logado = await auth.logar(email, senha, cnpj);
        console.log(email)
        console.log(senha)
        console.log(cnpj)
        if (logado) navigate("/");
      } catch (error : any ) {
        const statusErr = error.request.status
        if(statusErr === 401) alert('Sem autorização')
        if(error)
        navigate("/")
      }
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto w-44 h-28"
            src="/img/LOGO-APPCONTROL_PNG_02.png"
            alt="Your Company"
          />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={manejarLogar} method="GET">
            <div>
              <label
                htmlFor="cnpj"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                CNPJ
              </label>
              <div className="mt-2">
                <input
                  value={cnpj}
                  onChange={(e) => {
                    setCnpj(e.target.value);
                  }}
                  id="cnpj"
                  name="cnpj"
                  type="cnpj"
                  autoComplete="cnpj"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="senha"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Senha
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Esqueceu sua senha?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  value={senha}
                  onChange={(e) => {
                    setSenha(e.target.value);
                  }}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Conectar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
