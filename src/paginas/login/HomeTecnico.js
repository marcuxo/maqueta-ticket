import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BsFillLockFill } from "react-icons/bs";
import { BsFillUnlockFill } from "react-icons/bs";
import { BsArrowRepeat } from "react-icons/bs";
import { GetTicketsTecnico } from "../../api/GetTicketTecnico.api";

export const HomeTecnico = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [selectEstado, setSelectEstado] = useState("");
  const [modal, setModal] = useState(false);
  const [all_tickets, setAll_tickets] = useState([]);


  function seleccionador() {
    switch (selectEstado) {
      case "CERRADO":
        setModal(!modal);

        break;

      default:
        break;
    }
  }

  const getAllTickets = async ()=>{
      const arrlyst = await GetTicketsTecnico({state})
  }

  const getAll_tickets = async () => {
    let respons = await GetTicketsTecnico({state})
      setAll_tickets(respons.arr_all_tickets)

      console.log(respons.arr_all_tickets)
  }

  useEffect(() => {
    seleccionador();
  }, [selectEstado]);

  useEffect(() => {
    getAllTickets()
  }, []);

  useEffect(() => {
   getAll_tickets() 
  }, []);

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

                    <div className="">
                      <button
                        className="btn btn-outline-danger mt-1 small"
                        type="submit"
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
            {all_tickets.map(ticket=>
              <div className="row ticketcard rounded-4 border border-secondary mx-2 my-2 py-3"key={ticket._id}>
                <div className="col-12">
                  <div className="row">
                    <div className="my-2"><b>Titulo: </b>{ticket.titulo}</div>
                    <div className="mb-2"><b>Usuario: </b>{ticket.usuario}</div>
                    <div className="col-6"><b>Fecha Apertura: </b>04/06/2022</div>
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
                        <span className="small"><b>Asignado a:</b> Miguel Salas</span>
                      </div>
                      <div className="">
                        <button
                          className="btn btn-outline-danger mt-1 small"
                          type="submit"
                        >
                          Pedir Ticket
                        </button>
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
            {all_tickets.map(ticket=>
              <div className="row ticketcard rounded-4 border border-secondary mx-2 my-2 py-3">
                <div className="col-12" key={ticket._id}>
                  <div className="row">
                    <div className="my-2"><b>Titulo:</b>{ticket.titulo}</div>
                    <div className="mb-2"><b>Usuario:</b>{ticket.usuario}</div>
                    <div className="col-6"><b>Fecha Apertura:</b>{ticket.start_date}</div>
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
                      {selectEstado === "PROCESO" ? (
                        <BsArrowRepeat />
                      ) : (
                        <BsFillUnlockFill />
                      )}
                      <div>
                        <span className="small">
                          <b>Asignado a:</b> Benjamin Lopez
                        </span>
                      </div>
                      <select
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
                      </select>
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
            {all_tickets.map(ticket=>
              <div className="row ticketcard rounded-4 border border-secondary mx-2 my-2 py-3"key={ticket._id}>
                <div className="col-12">
                  <div className="row">
                    <div className="my-2"><b>Titulo:</b>{ticket.titulo}</div>
                    <div className="mb-2"><b>Usuario:</b>{ticket.usuario}</div>
                    <div className="col-6"><b>Fecha De Cierre:</b>{ticket.close_date}</div>
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
                    <span className="small"><b>Cerrado Por:</b> Benjamin Lopez</span>
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
                  <textarea class="form-control" id="message-text"></textarea>
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
