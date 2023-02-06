import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const UserMakeTiket = () => {
  //permite navegar entre ventanas o vistas
  const navigate = useNavigate();
  //props de usuarios desde home
  const {state} = useLocation();

  //logica para agregar tiket en base de datos
  const SaveTiketUser = async () => {
    navigate('/tickets',{state: state})
  }

  return (
    <>
      <div className=''>
        <div className=''>
          <div className=''>
            <img src='/img/logo_ariztia.png' />
          </div>
          <div className=''>
            <span className=''>user: {state}</span>
          </div>
        </div>
      </div>

      <div className=''>
        <div className=''>
          <div className=''>
            <label className=''>Usuario:</label>
            <input className='' type={'text'} value={state} />
          </div>
          <div className=''>
            <label className=''>Titulo:</label>
            <input className='' type={'text'} />
          </div>
          <div className=''>
            <label className=''>Descripcion:</label>
            <textarea rows={5}/>
          </div>
          <div className=''>
            <label className=''>Urgencia:</label>
            <select className=''>
              <option>urgente</option>
              <option>mediana</option>
              <option>baja</option>
            </select>
          </div>
          <div className=''>
            <button className='' onClick={()=>SaveTiketUser()}>Ingresar ticket</button>
          </div>
        </div>
      </div>
    </>
    
  )
}
