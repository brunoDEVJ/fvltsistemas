import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
  fields?: { nome: string; href: string }[];
}


export const Header = () => {
  const navigation: NavigationItem[] = [
    {
      name: "Cadastros",
      href: "/cadastros",
      current: true,
      fields:  [
        { nome: "Empresa", href: "#" },
        { nome: "Fornecedor", href: "#" },
        { nome: "Vendedor", href: "#" },
        { nome: "Transportador", href: "#" },
        { nome: "Forma de Pagamento", href: "#" },
        { nome: "Funcionário", href: "#" },
        { nome: "Fabricante", href: "#" },
        { nome: "C.F.O.P", href: "#" },
      ] ,
    },
    {
      name: "Clientes",
      href: "/clientes",
      current: false,
      fields: [
        {nome:"Clientes" , href: "#"},
        {nome:"CRM" , href: "#"},
        {nome:"Relação de Clientes" , href: "#"}
      ],
    },
    {
      name: "Produtos",
      href: "/produtos",
      current: false,
      fields: [
        {nome: "Produtos", href: "#"},
        {nome: "Grupos", href: "#"},
        {nome: "Unidades de Medidas", href: "#"},
        {nome: "Composição", href: "#"},
        {nome: "Grades Produtos", href: "#"},
        {nome: "Sub Grupos", href: "#"},
        {nome: "Tributações", href: "#"},
        {nome: "Inventário", href: "#"},
        {nome: "", href: "#"},

      ],
    },
    {
      name: "Serviços",
      href: "serviços",
      current: false,
    },
    {
      name: "Vendas",
      href: "/vendas",
      current: true,
    },
    {
      name: "Compras",
      href: "/compras",
      current: true,
    },
    {
      name: "Financeiro",
      href: "/financeiro",
      current: false,
    },
    {
      name: "Relatórios",
      href: "relatorios",
      current: false,
    },
    {
      name: "Arquivos Fiscais",
      href: "/arquivos-fiscais",
      current: false,
    },
    {
      name: "Caixas",
      href: "/caixas",
      current: false,
    },
  ];

  const navigate = useNavigate();

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  const auth = useContext(AuthContext);
  const manejarDeslogar = () => {
    auth.deslogar();
    navigate("/");
  };
  return (
    <Disclosure as="nav" className="bg-gray-700">
      {({ open }) => (
        <>
          <div  className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                {auth.usuario ? (
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                ) : (
                  <a
                    href={"/login"}
                    className={classNames(
                      "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                    aria-current="page"
                  >
                    Login
                  </a>
                )}
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch  sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="/img/LOGO-APPCONTROL_B_04.png"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {auth.usuario ? (
                      navigation.map((item) => (
                        <Menu
                          as="div"
                          className="relative inline-block text-left"
                        >
                          <div>
                            <Menu.Button className={classNames(
                              item.current ?
                              "inline-flex w-full justify-center gap-x-1.5 rounded-md  bg-cyan-200 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset hover:bg-gray-50"
                              :
                              "inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            )}>
                              {item.name}
                            </Menu.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1">
                                {item.fields?.map((i) => (
                                  <Menu.Item>
                                    {({ active }) => (
                                      <a
                                        href="#"
                                        className={classNames(
                                          active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-800",
                                          "block px-4 py-2 text-sm text-center",
                                        )}
                                      >
                                        {i.nome}
                                      </a>
                                    )}
                                  </Menu.Item>
                                ))}
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                        // <a
                        //   key={item.name}
                        //   href={item.href}
                        //   className={classNames(
                        //     item.current
                        //       ? "bg-cyan-100 text-black hover:bg-cyan-300"
                        //       : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        //     "rounded-md px-3 py-2 text-sm font-medium"
                        //   )}
                        //   aria-current={item.current ? "page" : undefined}
                        // >
                        //   {item.name}
                        // </a>
                      ))
                    ) : (
                      <a
                        href={"/login"}
                        className={classNames(
                          "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current="page"
                      >
                        Login
                      </a>
                    )}
                  </div>
                </div>
              </div>
              {auth.usuario && (
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={auth.usuario.fantasia}
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              onClick={manejarDeslogar}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              )}
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
