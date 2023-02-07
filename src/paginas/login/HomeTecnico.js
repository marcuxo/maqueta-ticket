import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BsFillLockFill } from "react-icons/bs";
import { BsFillUnlockFill } from "react-icons/bs";
import { BsArrowRepeat } from "react-icons/bs";

export const HomeTecnico = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

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
      <div class="container-fluid text-center espaciador">
        <div class="row align-items-start">
          <div class="col ticketcard rounded-4 border border-secondary mx-2 my-2">
            Tickets Sin Asignar
            <div className="col">
              <div className="row ticketcard rounded-4 border border-secondary mx-2 my-2 py-3">
                <div className="col-12">
                  <div className="row">
                    <div className="my-2">Titulo:No conecta</div>
                    <div className="mb-2">Usuario: tu mama</div>
                    <div className="col-6">Fecha: 02/06/2022</div>
                    <div className="col-6">Id:022</div>
                    <div className="my-2">Urgencia:muy urgente</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 mb-3">
                      Descripcion: no tengo conexion a interner
                    </div>

                    <div className="">
                      <span className="small">Estado:</span> <BsFillLockFill />
                      <span className="small">Asignado a: Miguel Salas</span>
                      <button
                        className="btn btn-outline-danger mt-1 samll"
                        type="submit"
                      >
                        Asignar Ticket
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row ticketcard rounded-4 border border-secondary mx-2 my-2 py-3">
                <div className="col-12">
                  <div className="row">
                    <div className="my-2">Titulo:No conecta</div>
                    <div className="mb-2">Usuario: tu mama</div>
                    <div className="col-6">Fecha: 02/06/2022</div>
                    <div className="col-6">Id:022</div>
                    <div className="my-2">Urgencia:muy urgente</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 mb-3">
                      Descripcion: no tengo conexion a interner
                    </div>

                    <div className="">
                      <span className="small">Estado:</span>{" "}
                      <BsFillUnlockFill />{" "}
                      <span className="small">Asignado a: Marco Urrutia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row ticketcard rounded-4 border border-secondary mx-2 my-2 py-3">
                <div className="col-12">
                  <div className="row">
                    <div className="my-2">Titulo:No conecta</div>
                    <div className="mb-2">Usuario: tu mama</div>
                    <div className="col-6">Fecha: 02/06/2022</div>
                    <div className="col-6">Id:022</div>
                    <div className="my-2">Urgencia:muy urgente</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 mb-3">
                      Descripcion: no tengo conexion a interner
                    </div>

                    <div className="">
                      <span className="small">Estado:</span> <BsArrowRepeat />
                      <span className="small">Asignado a: Pedro Gutierrez</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col ticketcard rounded-4 border border-secondary mx-2 my-2">
            Asignados
            <div className="col">
              <div className="row ticketcard rounded-4 border border-secondary mx-2 my-2 py-3">
                <div className="col-12">
                  <div className="row">
                    <div className="my-2">Titulo:No conecta</div>
                    <div className="mb-2">Usuario: tu mama</div>
                    <div className="col-6">Fecha: 02/06/2022</div>
                    <div className="col-6">Id:022</div>
                    <div className="my-2">Urgencia:muy urgente</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 mb-3">
                      Descripcion: no tengo conexion a interner
                    </div>

                    <div className="">
                      <span className="small">Estado:</span> Cerrado
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row ticketcard rounded-4 border border-secondary mx-2 my-2 py-3">
                <div className="col-12">
                  <div className="row">
                    <div className="my-2">Titulo:No conecta</div>
                    <div className="mb-2">Usuario: tu mama</div>
                    <div className="col-6">Fecha: 02/06/2022</div>
                    <div className="col-6">Id:022</div>
                    <div className="my-2">Urgencia:muy urgente</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 mb-3">
                      Descripcion: no tengo conexion a interner
                    </div>

                    <div className="">
                      <span className="small">Estado:</span> Cerrado
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row ticketcard rounded-4 border border-secondary mx-2 my-2 py-3">
                <div className="col-12">
                  <div className="row">
                    <div className="my-2">Titulo:No conecta</div>
                    <div className="mb-2">Usuario: tu mama</div>
                    <div className="col-6">Fecha: 02/06/2022</div>
                    <div className="col-6">Id:022</div>
                    <div className="my-2">Urgencia:muy urgente</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 mb-3">
                      Descripcion: no tengo conexion a interner
                    </div>

                    <div className="">
                      <span className="small">Estado:</span> Cerrado
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col ticketcard rounded-4 border border-secondary mx-2 my-2">
            Mis Asignados
            <div className="col">
              <div className="row ticketcard rounded-4 border border-secondary mx-2 my-2 py-3">
                <div className="col-12">
                  <div className="row">
                    <div className="my-2">Titulo:No conecta</div>
                    <div className="mb-2">Usuario: tu mama</div>
                    <div className="col-6">Fecha: 02/06/2022</div>
                    <div className="col-6">Id:022</div>
                    <div className="my-2">Urgencia:muy urgente</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 mb-3">
                      Descripcion: no tengo conexion a interner
                    </div>

                    <div className="">
                      <span className="small">Estado:</span> Cerrado
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row ticketcard rounded-4 border border-secondary mx-2 my-2 py-3">
                <div className="col-12">
                  <div className="row">
                    <div className="my-2">Titulo:No conecta</div>
                    <div className="mb-2">Usuario: tu mama</div>
                    <div className="col-6">Fecha: 02/06/2022</div>
                    <div className="col-6">Id:022</div>
                    <div className="my-2">Urgencia:muy urgente</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 mb-3">
                      Descripcion: no tengo conexion a interner
                    </div>

                    <div className="">
                      <span className="small">Estado:</span> Cerrado
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row ticketcard rounded-4 border border-secondary mx-2 my-2 py-3">
                <div className="col-12">
                  <div className="row">
                    <div className="my-2">Titulo:No conecta</div>
                    <div className="mb-2">Usuario: tu mama</div>
                    <div className="col-6">Fecha: 02/06/2022</div>
                    <div className="col-6">Id:022</div>
                    <div className="my-2">Urgencia:muy urgente</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 mb-3">
                      Descripcion: no tengo conexion a interner
                    </div>

                    <div className="">
                      <span className="small">Estado:</span> Cerrado
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col ticketcard rounded-4 border border-secondary mx-2 my-2">
            Tickets Cerrados
            <div className="col">
              <div className="row ticketcard rounded-4 border border-secondary mx-2 my-2 py-3">
                <div className="col-12">
                  <div className="row">
                    <div className="my-2">Titulo:No conecta</div>
                    <div className="mb-2">Usuario: tu mama</div>
                    <div className="col-6">Fecha: 02/06/2022</div>
                    <div className="col-6">Id:022</div>
                    <div className="my-2">Urgencia:muy urgente</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 mb-3">
                      Descripcion: no tengo conexion a interner
                    </div>

                    <div className="">
                      <span className="small">Estado:</span> Cerrado
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row ticketcard rounded-4 border border-secondary mx-2 my-2 py-3">
                <div className="col-12">
                  <div className="row">
                    <div className="my-2">Titulo:No conecta</div>
                    <div className="mb-2">Usuario: tu mama</div>
                    <div className="col-6">Fecha: 02/06/2022</div>
                    <div className="col-6">Id:022</div>
                    <div className="my-2">Urgencia:muy urgente</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 mb-3">
                      Descripcion: no tengo conexion a interner
                    </div>

                    <div className="">
                      <span className="small">Estado:</span> Cerrado
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row ticketcard rounded-4 border border-secondary mx-2 my-2 py-3">
                <div className="col-12">
                  <div className="row">
                    <div className="my-2">Titulo:No conecta</div>
                    <div className="mb-2">Usuario: tu mama</div>
                    <div className="col-6">Fecha: 02/06/2022</div>
                    <div className="col-6">Id:022</div>
                    <div className="my-2">Urgencia:muy urgente</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 mb-3">
                      Descripcion: no tengo conexion a interner
                    </div>

                    <div className="">
                      <span className="small">Estado:</span> Cerrado
                    </div>
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
