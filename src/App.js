import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './paginas/login/Login';
import { Home } from './paginas/sesion/Home';
import { UserMakeTiket } from './paginas/sesion/UserMakeTiket';
import { UserTikets } from './paginas/sesion/UserTikets';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/tickets' element={<UserTikets />} />
      <Route path='/crear_ticket' element={<UserMakeTiket />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}


export default App;
