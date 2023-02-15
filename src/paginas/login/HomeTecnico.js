import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BsFillLockFill } from "react-icons/bs";
import { BsFillUnlockFill } from "react-icons/bs";
import { BsArrowRepeat } from "react-icons/bs";
import { GetTicketsTecnico } from "../../api/GetTicketTecnico.api";
import { AsingTicket } from "../../api/AsingTicket.api";
import { CerrarTicket } from "../../api/CerrarTicket.api";
import { TicketProcess } from "../../api/TicketProcess.api";

export const HomeTecnico = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [selectEstado, setSelectEstado] = useState("");
  const [modal, setModal] = useState(false);
  const [all_tickets, setAll_tickets] = useState([]);
  const [close_tickets, setClose_tickets] = useState([]);
  const [open_tickets, setOpen_tickets] = useState([]);
  const [my_tickets, setMy_tickets] = useState([]);
  const [conclusion, setConclusion] = useState("");
  const [id, setId] = useState("");

  function seleccionador(id_, select) {
    switch (select) {
      case "CERRADO":
        setId(id_)
        setModal(!modal);

        break;
      case "PROCESO":
        ticket_process(id_,"PROCESO")
        break;

        case "ABIERTO":
        ticket_process(id_,"ABIERTO")
        break;
          
      default:
        break;
    }
  }


  const getAll_tickets = async () => {
    let respons = await GetTicketsTecnico({state})
    // console.log(respons)
      setAll_tickets(respons.arr_all_tickets)
      setClose_tickets(respons.arr_close_tickets)
      setOpen_tickets(respons.arr_open_tickets)
      setMy_tickets(respons.arr_my_tickets)

        //aqui mas de lo mismo, lo hice para ver si funcionaba, tampoco se si funciono
  }

  const Asignar_ticket = async (id) => {
    let is_agregar = window.confirm('Asignarme ticket')
    if(is_agregar){
      let isasing_ = await AsingTicket({id:id,state})
      if(isasing_.success){window.location.reload()}
    }else{
      alert('No te asignaste el ticket');
    }
  }

  async function cerrar_ticket(id_) {
    let guardarRes = await CerrarTicket({conclusion,id_})
    if (guardarRes.success) {
      await alert(guardarRes.msg)
      setModal(false)
    }
    console.log(conclusion,id_)
  }
  
  async function ticket_process(id_,estado) {
    console.log(id_);
    let guardarEst = await TicketProcess({id_,estado})
    if (guardarEst.success) {
      await alert(guardarEst.msg)
      getAll_tickets()
    }
  }

  useEffect(() => {
    seleccionador();
  }, [selectEstado]);

  useEffect(() => {
   getAll_tickets() 
  }, []);
  //lo hice porque estaba tratando de hacer lo de arriba, la verdad de la milanesa no se si sirvio xd

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
            <b>Tickets Sin Asignar</b>
            {/* //Aqui comienzan los tickets sin guardar// */}

            {/* aqui me mostraba todo lo de un usuario pero despues con los filtros me dejo de mostrar y despues se fue todo a la verga XDDDDD */}
            <div className="col">
           {all_tickets.map(ticket=>
              <div className="row ticketcard rounded-4 border border-secondary mx-2 my-2 py-3"key={ticket._id}>
                <div className="col-12">
                  <div className="row">
                    <div className="my-2"><b>Titulo: </b>{ticket.titulo}</div>
                    <div className="mb-2"><b>Usuario: </b> {ticket.usuario}</div>
                    <div className="col-6"><b>Fecha: </b>
                    <br/>
                    {ticket.create_date?ticket.create_date.split('T',1)[0]:null}</div>
                    <div className="col-6"><b>Id: </b>{ticket.id_ticket}</div>
                    <div className="my-2"><b>Ubicacion: </b>{ticket.ubicacion}</div>
                    <div className="my-2"><b>Urgencia: </b>{ticket.urgencia}</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 mb-3">
                      <b>Descripcion:</b>{ticket.descripcion}
                    </div>
{/* todo lo que es ticket.algo es por lo que estaba probando y se muestran solo los tickets del usuario que ingrese, si ingreso como tecnico con el nombre de Karen, se ven todos lo tickets de la karen pero si ingreso mi nombre no me salen todos los tickets, de ningun tipo :).
igual puse el .map en todo lo que pude, osea fue solo al principio de las columnas (psdt: son las 2:42 y no se que mas hacer, no se nada mas y no se me ocurre nada, me quiero autoasesinar:)) */}
                    <div className="">
                      <button
                        className="btn btn-outline-danger mt-1 small"
                        type="submit"
                        onClick={()=>Asignar_ticket(ticket._id)}
                      >
                        Tomar Ticket
                      </button>
                    </div>
                  </div>
                </div>
              </div>)}
            </div>
          </div>
            

          <div class="col ticketcard rounded-4 border border-secondary mx-2 my-2">
            <b>Asignados</b> {/*Aqui comienzan los tickets asignados*/}
            <div className="col">
            {open_tickets.map(ticket=>
              <div className="row ticketcard rounded-4 border border-secondary mx-2 my-2 py-3"key={ticket._id}>
                <div className="col-12">
                  <div className="row">
                    <div className="my-2"><b>Titulo: </b>{ticket.titulo}</div>
                    <div className="mb-2"><b>Usuario: </b>{ticket.usuario}</div>
                    <div className="col-6"><b>Fecha Apertura: </b>
                    <br/>
                    {ticket.start_date?ticket.start_date.split('T',1)[0]:null}</div>
                    <div className="col-6"><b>Id: </b>{ticket.id_ticket}</div>
                    <div className="my-2"><b>Ubicacion: </b>{ticket.ubicacion}</div>
                    <div className="my-2"><b>Urgencia: </b>{ticket.urgencia}</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 mb-3">
                      <b>Descripcion:</b>{ticket.descripcion}
                    </div>

                    <div className="">
                      <span className="small"><b>Estado:</b></span>
                      <BsFillUnlockFill />
                      <div>
                        <span className="small"><b>Asignado a:</b> {ticket.asignado}</span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>)}
            </div>
          </div>

          <div class="col ticketcard rounded-4 border border-secondary mx-2 my-2">
            <b>Mis Asignados</b> {/* Aqui comienzan los tickets personales */}
            <div className="col">
            {my_tickets.map(ticket=>
              <div className="row ticketcard rounded-4 border border-secondary mx-2 my-2 py-3">
                <div className="col-12" key={ticket._id}>
                  <div className="row">
                    <div className="my-2"><b>Titulo:</b>{ticket.titulo}</div>
                    <div className="mb-2"><b>Usuario:</b>{ticket.usuario}</div>
                    <div className="col-6"><b>Fecha Apertura:</b>
                    <br/>
                    {ticket.start_date?ticket.start_date.split('T',1)[0]:null}</div>
                    <div className="col-6"><b>Id:</b>{ticket.id_ticket}</div>
                    <div className="my-2"><b>Ubicacion:</b> {ticket.ubicacion}</div>
                    <div className="my-2"><b>Urgencia:</b>{ticket.urgencia}</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 mb-3">
                      <b>Descripcion:</b> {ticket.descripcion}
                    </div>

                    <div className="">
                      <span className="small"><b>Estado:</b></span>{" "}
                      {ticket.estado === "PROCESO" ? (
                        <BsArrowRepeat />
                      ) : (
                        <BsFillUnlockFill />
                      )}
                      <div>
                        <span className="small">
                          <b>Asignado a:</b> {ticket.asignado}
                        </span>
                      </div>
                      {/* <select
                        class="form-select btn btn-outline-danger mt-1 small"
                        aria-label="Default select example"
                        name="selectEstado"
                        value={selectEstado}
                        onChange={(e) => setSelectEstado(e.target.value)}
                      >
                        <option selected>Modificar Estado de Ticket</option>
                        <option value="ABIERTO">Ticket Abierto</option>
                        <option value="PROCESO">Ticket en Proceso</option>
                        <option value="CERRADO">Cerrar Ticket</option>
                      </select> */}

                        <div className="dropdown">
                          <button className="btn btn-outline-danger dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Modificar Ticket
                          </button>
                          <ul className="dropdown-menu btn btn-outline-danger" aria-labelledby="dropdownMenuButton1">
                            <li style={{cursor:"pointer"}}><span className="dropdown-item" onClick={() => seleccionador(ticket._id,"ABIERTO")}>ABIERTO</span></li>
                            <li style={{cursor:"pointer"}}><span className="dropdown-item" onClick={() => seleccionador(ticket._id,"PROCESO")}>PROCESO</span></li>
                            <li style={{cursor:"pointer"}}><span className="dropdown-item" onClick={() => seleccionador(ticket._id,"CERRADO")}>CERRADO</span></li>
                          </ul>                           
                        </div>


                    </div>
                  </div>
                </div>
              </div>)}
            </div>
          </div>
          <div class="col ticketcard rounded-4 border border-secondary mx-2 my-2">
            <b>Tickets Cerrados</b>
            {/* Aqui comienzan los tickets que ya estan cerrados */}
            <div className="col">
            {close_tickets.map(ticket=>
              <div className="row ticketcard rounded-4 border border-secondary mx-2 my-2 py-3"key={ticket._id}>
                <div className="col-12">
                  <div className="row">
                    <div className="my-2"><b>Titulo:</b>{ticket.titulo}</div>
                    <div className="mb-2"><b>Usuario:</b>{ticket.usuario}</div>
                    <div className="col-6"><b>Fecha De Cierre:</b>
                    <br/>
                    {ticket.close_date?ticket.close_date.split('T',1)[0]:null}</div>
                    <div className="col-6"><b>Id:</b>{ticket.id_ticket}</div>
                    <div className="my-2"><b>Ubicacion:</b> {ticket.ubicacion}</div>
                    <div className="my-2"><b>Urgencia:</b>{ticket.urgencia}</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 mb-3">
                      <b>Descripcion:</b>{ticket.descripcion}
                    </div>

                    <div className="">
                      <span className="small"><b>Estado:</b></span> <BsFillLockFill />
                    </div>
                    <span className="small"><b>Cerrado Por:</b> {ticket.asignado}</span>
                  </div>
                </div>
              </div>)}
            </div>
          </div>
        </div>
      </div>

      {modal ? (
        <>
          <div class="modal show " tabindex="-1" style={{ display: "block" }}>
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h3 class="modal-title fs-5" id="exampleModalLabel">
                    Desea Cerrar Ticket?
                  </h3>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setModal(!modal)}
                  ></button>
                </div>
                <div class="mb-3 mx-4">
                  <label for="message-text" class="col-form-label">
                    Conclusion Ticket:
                  </label>
                  <textarea class="form-control" id="message-text" onChange={(e) => setConclusion(e.target.value)}></textarea>
                </div>

                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-outline-info"
                    onClick={() => setModal(!modal)}
                  >
                    Cancelar
                  </button>
                  <button
                    className="btn btn-outline-danger mt-1 "
                    type="submit"
                    onClick={() => cerrar_ticket(id)}
                  >
                    Cerrar Ticket
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
