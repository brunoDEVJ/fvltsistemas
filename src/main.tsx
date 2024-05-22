import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./output.css";
import { BrowserRouter,
  //  Route, Routes
   } from "react-router-dom";
import { AuthProvider } from "./contexts/Auth/AuthProvider.tsx";
import App from "./App.tsx";
// import { Login } from "./pages/Login/index.tsx";
// import { Usuario } from "./pages/Usa/index.tsx";
// import { Usuario } from './pages/Usuario/index.tsx'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App/>
          {/* <Route path="/" element={<App />}></Route>
          <Route path="/login" element={<Login />}></Route> */}
          {/* <Route path="/usuario" element={<Usuario />}/> */}
          {/* <Route path="*" element={<App />}></Route> */}
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
