import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './paginas/sesion/Home';
import { UserMakeTiket } from './paginas/sesion/UserMakeTiket';
import { UserTikets } from './paginas/sesion/UserTikets';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/tickets' element={<UserTikets />} />
      <Route path='/crear_ticket' element={<UserMakeTiket />} />
    </Routes>
  );
}


export default App;
