import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const  navigate = useNavigate()
  // almacena el estado del usuario
  const [Ususario, setUsusario] = useState("");

  // verifica si ya hay un usuario guardado en el locar storage
  useEffect(() => {
    let user = localStorage.getItem('usuario')
    if(user !== null)setUsusario(user)
  }, [])
  
  //guarda y redirige a la session sel usuario
  const OnSubmit = async () => {
    localStorage.setItem('usuario',Ususario);
    navigate('/tickets',{state: Ususario})
  }

  return (
    <div className=''>
      <div className=''>
        <div className=''>
          <button className='' onClick={()=>navigate('/login',{replace: true})}>Ingreso Tecnico</button>
        </div>
        <div className=''>
          <img src='/img/logo_ariztia.png' />
        </div>
        <div>
          <h3 className=''>login</h3>
          <input className='' type={'text'} name="usuario" value={Ususario} onChange={(e)=>setUsusario(e.target.value)} /><span>@ariztia.com</span><br/>
          <button className='' onClick={()=>OnSubmit()}>entar!</button>
        </div>
      </div>
    </div>
  )
}
