import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BsFillLockFill } from "react-icons/bs";
import { BsFillUnlockFill } from "react-icons/bs";
import { BsArrowRepeat } from "react-icons/bs";
import { setSelectEstado } from "../../App";

export const HomeTecnico = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [descripcionTec, setDescripcionTec] = useState("");
  const [selectEstado, setSelectEstado] = useState("");
  const [modal, setModal] = useState(false);

  function seleccionador() {
    switch (selectEstado) {
      case "CERRADO":
        setModal(!modal);

        break;

      default:
        break;
    }
  }

  useEffect(() => {
    seleccionador();
  }, [selectEstado]);

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
            Tickets Sin Asignar{" "}
            {/* //Aqui comienzan los tickets sin guardar// */}
            <div className="col">
              <div className="row ticketcard rounded-4 border border-secondary mx-2 my-2 py-3">
                <div className="col-12">
                  <div className="row">
                    <div className="my-2">Titulo:No conecta</div>
                    <div className="mb-2">Usuario: tu mama</div>
                    <div className="col-6">Fecha: 02/06/2022</div>
                    <div className="col-6">Id:022</div>
                    <div className="my-2">Ubicacion: Oficina Calidad</div>
                    <div className="my-2">Urgencia:muy urgente</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 mb-3">
                      Descripcion: no tengo conexion a interner
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
              </div>
            </div>
          </div>

          <div class="col ticketcard rounded-4 border border-secondary mx-2 my-2">
            Asignados {/*Aqui comienzan los tickets asignados*/}
            <div className="col">
              <div className="row ticketcard rounded-4 border border-secondary mx-2 my-2 py-3">
                <div className="col-12">
                  <div className="row">
                    <div className="my-2">Titulo:No conecta</div>
                    <div className="mb-2">Usuario: tu mama</div>
                    <div className="col-6">Fecha Apertura: 04/06/2022</div>
                    <div className="col-6">Id:022</div>
                    <div className="my-2">Ubicacion: Oficina Calidad</div>
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
                      <BsFillUnlockFill />
                      <div>
                        <span className="small">Asignado a: Miguel Salas</span>
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
              </div>
            </div>
          </div>

          <div class="col ticketcard rounded-4 border border-secondary mx-2 my-2">
            Mis Asignados {/* Aqui comienzan los tickets personales */}
            <div className="col">
              <div className="row ticketcard rounded-4 border border-secondary mx-2 my-2 py-3">
                <div className="col-12">
                  <div className="row">
                    <div className="my-2">Titulo:No conecta</div>
                    <div className="mb-2">Usuario: tu mama</div>
                    <div className="col-6">Fecha Apertura: 04/06/2022</div>
                    <div className="col-6">Id:022</div>
                    <div className="my-2">Ubicacion: Oficina Calidad</div>
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
                      {selectEstado === "PROCESO" ? (
                        <BsArrowRepeat />
                      ) : (
                        <BsFillUnlockFill />
                      )}
                      <div>
                        <span className="small">
                          Asignado a: Benjamin Lopez
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
              </div>
            </div>
          </div>
          <div class="col ticketcard rounded-4 border border-secondary mx-2 my-2">
            Tickets Cerrados{" "}
            {/* Aqui comienzan los tickets que ya estan cerrados */}
            <div className="col">
              <div className="row ticketcard rounded-4 border border-secondary mx-2 my-2 py-3">
                <div className="col-12">
                  <div className="row">
                    <div className="my-2">Titulo:No conecta</div>
                    <div className="mb-2">Usuario: tu mama</div>
                    <div className="col-6">Fecha De Cierre: 08/06/2022</div>
                    <div className="col-6">Id:022</div>
                    <div className="my-2">Ubicacion: Oficina Calidad</div>
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
                    </div>
                    <span className="small">Cerrado Por: Benjamin Lopez</span>
                  </div>
                </div>
              </div>
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
