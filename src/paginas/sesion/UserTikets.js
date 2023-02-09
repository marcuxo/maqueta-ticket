import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const UserTikets = () => {
  const navigate = useNavigate();
  //props de usuarios desde home
  const { state } = useLocation();

  const OnCreateTicket = async () => {
    navigate("/crear_ticket", { state: state });
  };

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
      <div class="container-fluid text-center espaciador">
        <div class="row align-items-start">
          <div class="col ticketcard rounded-4 border border-secondary mx-2 my-2">
            Tickets Abiertos {/* Aqui inicia Tarjeta de ticket */}
            <div className="col-12">
              <div className="row ticketcard rounded-4 border border-secondary mx-2 my-2">
                <div className="col-12">
                  <div className="row">
                    <div className="my-2">Titulo:No conecta</div>
                    <div className="mb-2">Usuario: tu mama</div>
                    <div className="mb-2">
                      Descripcion: no tengo conexion a interner
                    </div>
                    <div className="mb-4">Ubicacion: Oficina Calidad</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="my-2">Fecha: 02/06/2022</div>
                    <div className="mb-2">Id:022</div>
                    <div className="mb-2">Urgencia:muy urgente</div>
                    <div>Estado: Cerrado</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row ticketcard rounded-4 border border-secondary mx-2 my-2">
                <div className="col-12">
                  <div className="row">
                    <div className="my-2">Titulo:No conecta</div>
                    <div className="mb-2">Usuario: tu mama</div>
                    <div className="mb-2">
                      Descripcion: no tengo conexion a interner
                    </div>
                    <div className="mb-4">Ubicacion: Oficina Calidad</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="my-2">Fecha: 02/06/2022</div>
                    <div className="mb-2">Id:022</div>
                    <div className="mb-2">Urgencia:muy urgente</div>
                    <div>Estado: Cerrado</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col ticketcard rounded-4 border border-secondary mx-2 my-2">
            Tickets Cerrados {/*Aqui comienzan los tickets Cerrados*/}
            <div className="col-12">
              <div className="row ticketcard rounded-4 border border-secondary mx-2 my-2">
                <div className="col-12">
                  <div className="row">
                    <div className="my-2">Titulo:No conecta</div>
                    <div className="mb-2">Usuario: tu mama</div>
                    <div className="mb-2">
                      Descripcion: no tengo conexion a interner
                    </div>
                    <div className="mb-4">Ubicacion: Oficina Calidad</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="my-2">Fecha: 02/06/2022</div>
                    <div className="mb-2">Id:022</div>
                    <div className="mb-2">Urgencia:muy urgente</div>
                    <div>Estado: Cerrado</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row ticketcard rounded-4 border border-secondary mx-2 my-2">
                <div className="col-12">
                  <div className="row">
                    <div className="my-2">Titulo:No conecta</div>
                    <div className="mb-2">Usuario: tu mama</div>
                    <div className="mb-2">
                      Descripcion: no tengo conexion a interner
                    </div>
                    <div className="mb-4">Ubicacion: Oficina Calidad</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="my-2">Fecha: 02/06/2022</div>
                    <div className="mb-2">Id:022</div>
                    <div className="mb-2">Urgencia:muy urgente</div>
                    <div>Estado: Cerrado</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
