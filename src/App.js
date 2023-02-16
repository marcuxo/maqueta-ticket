import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./paginas/login/Login";
import { Home } from "./paginas/sesion/Home";
import { UserMakeTiket } from "./paginas/sesion/UserMakeTiket";
import { UserTikets } from "./paginas/sesion/UserTikets";
import { HomeTecnico } from "./paginas/login/HomeTecnico";
//funcion raiz de aplicacion web
function App() {
  return (
    <Routes> 
      {/* ruta principal */}
      <Route path="/" element={<Home />} />
      {/* ruta de tickets de ususario */}
      <Route path="/tickets" element={<UserTikets />} />
      {/* ruta de usuario para crear tickets */}
      <Route path="/crear_ticket" element={<UserMakeTiket />} />
      {/* ruta de tecnico para iniciar sesion */}
      <Route path="/login" element={<Login />} />
      {/* ruta de tecnico para ver todos los tickets */}
      <Route path="/home_tecnico" element={<HomeTecnico />} />
    </Routes>
  );
}



export default App;
 