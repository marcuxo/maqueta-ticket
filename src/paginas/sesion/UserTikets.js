import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GetTickets } from "../../api/GetTickets.api";
import { BsFillUnlockFill } from "react-icons/bs";
import { BsArrowRepeat } from "react-icons/bs";
import { BsFillLockFill } from "react-icons/bs";

export const UserTikets = () => {
  const navigate = useNavigate();
  //props de usuarios desde home
  const { state } = useLocation();
  const [ticket_close, setTicket_close] = useState([])
  const [ticket_others, setTicket_others] = useState([])

  const OnCreateTicket = async () => {
    navigate("/crear_ticket", { state: state });
  };

  const getTickets = async () => {
    let respons = await GetTickets({state})
      setTicket_close(respons.arr_close)
      setTicket_others(respons.arr_others)
      // console.log(respons)
  }

  useEffect(() => {
   getTickets()
  }, [])
  

  return (
    <>
    
      <div className="container-fluid">
        <div className="row">
          <div className="fixed-top fondoo rounded-bottom-4 border border-secondary">
            <h1 className="">
              <img src="/img/logo_ariztia.png" className="imgg" alt="Logo" />
            </h1>
            <h5>
              <span className="badge text-bg-danger">Usuario: {state}</span>
            </h5>
            <br />
            <button
              className="btn btn-outline-danger mt-1 "
              type="submit"
              onClick={() => OnCreateTicket()}
            >
              Crear Ticket
            </button>
            <div className="space"></div>
            <button
              className="btn btn-outline-danger mt-1 "
              type="submit"
              onClick={() => navigate("/")}
            >
              Salir
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid text-center espaciador">
        <div className="row align-items-start">
          <div className="col ticketcard rounded-4 border border-secondary mx-2 my-2">
            <b>Tickets </b>{/* Aqui inicia Tarjeta de ticket */}
            {
              ticket_others.map(ticket=>
                <div className="col-12" key={ticket._id}>
                  <div className="row ticketcard rounded-4 border border-secondary mx-2 my-2">
                    <div className="col-12">
                      <div className="row">
                        <div className="my-2"><b>Titulo: </b>{ticket.titulo}</div>
                        <div className="mb-2"><b>Usuario: </b>{ticket.usuario}</div>
                        <div className="mb-2">
                          <b>Descripcion: </b>{ticket.descripcion}
                        </div>
                        <div className="mb-4"><b>Ubicacion: </b>{ticket.ubicacion}</div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="row">
                        <div className="my-2"><b>Fecha: </b> {ticket.create_date?ticket.create_date.split('T',1)[0]:null}</div>
                        <div className="mb-2"><b>Id: </b>{ticket.id_ticket}</div>
                        <div className="mb-2"><b>Urgencia: </b>{ticket.urgencia}</div>
                        <div className="mb-4"><b>Estado: </b>{ticket.estado==="PROCESO"?<BsArrowRepeat/>:<BsFillUnlockFill/>}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          </div>

          {/*Aqui comienzan los tickets Cerrados*/}

          
          <div className="col ticketcard rounded-4 border border-secondary mx-2 my-2">
            <b>Tickets Cerrados </b>
            {ticket_close.map(ticket=>
              <div className="col-12"key={ticket._id}>
              <div className="row ticketcard rounded-4 border border-secondary mx-2 my-2">
                <div className="col-12">
                  <div className="row">
                    <div className="my-2"><b>Titulo: </b>{ticket.titulo}</div>
                    <div className="mb-2"><b>Usuario: </b>{ticket.usuario}</div>
                    <div className="mb-2">
                      <b>Descripcion: </b>{ticket.descripcion}
                    </div>
                    <div className="mb-4"><b>Ubicacion: </b>{ticket.ubicacion}</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="my-2"><b>Fecha De Creacion: </b>{ticket.create_date?ticket.create_date.split('T',1)[0]:null}</div>
                    <div className="my-2"><b>Fecha De Cierre: </b>{ticket.close_date?ticket.close_date.split('T',1)[0]:null}</div>
                    <div className="mb-2"><b>Id:</b>{ticket.id_ticket}</div>
                    <div className="mb-2"><b>Urgencia:</b>{ticket.urgencia}</div>
                    <div className="mb-4"><b>Estado:</b>{ticket.estado==="CERRADO"?<BsFillLockFill/>:<BsFillUnlockFill/>}</div>
                  </div>
                </div>
              </div>
            </div>
            )
          }
            
          </div>
        </div>
      </div>
    </>
  );
};
