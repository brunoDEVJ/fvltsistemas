import { Route, Routes } from "react-router-dom";
import { Usuario } from "./pages/Usuario/index.tsx";
import { Header } from "./components/header/index.tsx";
import { Produto } from "./pages/Produto/index.tsx";
import { Login } from "./pages/Login/index.tsx";
import { RequireAuth } from "./contexts/Auth/RequireAuth.tsx";

function App() {
  return (
    <div className="box-border w-auto">
      <Header/>
           <Routes>
                      <Route path="/login" element={<Login/>}></Route>
                      <Route path="/usuario" element={<Usuario/>}></Route>
                      <Route path="/produto" element={<RequireAuth><Produto/></RequireAuth>}></Route>
          </Routes>
    </div>
  );
}

export default App;
