import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const UserTikets = () => {

  const navigate = useNavigate();
  //props de usuarios desde home
  const { state } = useLocation();
  
  const OnCreateTicket = async () => {
    navigate('/crear_ticket',{state:state})
  }

  return (
    <>
    <div className=''>
      <div className=''>
        <div className=''>
          <h1 className=''>logo</h1>
          <span className=''>Usuario: {state}</span>
        </div>
        <div>
          <button className='' onClick={()=>OnCreateTicket()}>Crear Ticket</button>
        </div>
        <div className=''>UserTikets</div>
        <div className=''>UserTikets</div>
        <div className=''>UserTikets</div>
        <div className=''>UserTikets</div>
        <div className=''>UserTikets</div>
        <div className=''>UserTikets</div>
        <div className=''>UserTikets</div>
        <div className=''>UserTikets</div>
        <div className=''>UserTikets</div>
        <div className=''>UserTikets</div>
        <div className=''>UserTikets</div>
        <div className=''>UserTikets</div>
        <div className=''>UserTikets</div>
        <div className=''>UserTikets</div>
        <div className=''>UserTikets</div>
      </div>
    </div>
    </>
  )
}

