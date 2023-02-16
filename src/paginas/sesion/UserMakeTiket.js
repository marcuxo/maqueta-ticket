import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SaveTickets } from "../../api/SaveTickets.api";

export const UserMakeTiket = () => {
  //es para mostrar las fechas de los tickets
  const [fecha, setFecha] = useState("");
  //es para el titulo de los tickets
  const [titulo, setTitulo] = useState("");
  //es para la descripcion de los tickets
  const [descripcion, setDescripcion] = useState("");
  //es para denominar la urgencia de el ticket
  const [urgencia, setUrgencia] = useState("");
  //es para mostrar la ubicacion de el ticket
  const [ubicacion, setUbicacion] = useState('');
  //permite navegar entre ventanas o vistas
  const navigate = useNavigate();
  //props de usuarios desde home
  const { state } = useLocation();

  //funcion para agregar ticket en base de datos
  const SaveTiketUser = async () => {
    //consulta al servidor que envia parametros para guardar tickets
    let ticket_save = await SaveTickets({state, fecha, titulo, descripcion, urgencia, ubicacion})
    // console.log(ticket_save);
    //condicion que verifica si los datos fueron guardados 
    if (ticket_save.success) {
      //muestra mensaje cuando se guarda el ticket
      await alert(ticket_save.msg)
      //redirige a menu usuario
      navigate("/tickets", { state: state });
    }
     
    // console.log(fecha, titulo, descripcion, urgencia, state, ubicacion);
  };
  //funcion que asigna fecha a un ticket recien creado
  function mutarFecha() {
    //asigna fecha creacion
    let fechita = new Date();
    // console.log(fechita.toLocaleString());
    //almacena fecha de creacion en fecha
    setFecha(fechita.toLocaleString());
  }
  //dispara la funcion 'mutarFecha'
  useEffect(() => {
    setInterval(() => {
      mutarFecha();
    }, 1000);
  }, []);

  return (
    <> {/* esto es el header de la pagina */}
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
              onClick={() => navigate(-1)}
            >
              Regresar
            </button>
          </div>
        </div>
      </div>
{/* aqui empieza todo lo que es necesario que ingrese el usuario para crear su ticket */}
      <div className="container-fluid espaciador">
        <div className="row">
          <div className="col-6 ticketcard rounded-4">
            <div className="input-group mb-3 mt-4">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Titulo
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                name="titulo"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              ></input>
            </div>
            <div className="container-fluid">
              <div className="row">
            <div className="col-6">
            <div className="form-floating">
              <textarea
                className="form-control jej"
                placeholder="Agregue Descripcion"
                id="floatingTextarea2"
                name="descripcion"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              ></textarea>
              <label htmlFor="floatingTextarea2">Descripcion</label>
            </div>
           </div> 
           <div className="col-6">
            <div className="input-group">
           <span className="input-group-text" id="inputGroup-sizing-default">
                Ubicacion
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                name="ubicacion"
                value={ubicacion}
                onChange={(e) => setUbicacion(e.target.value)}
              ></input>
              </div>
            </div>
            </div>
            </div>
          </div>
          <div className="col-6 rounded-4 ticketcard">
            <h5>
              <span className="badge text-bg-danger">Usuario: {state}</span>
            </h5>
            <label>Urgencia:</label>
            <select
              className="form-select w-50 my-3"
              aria-label="Default select example"
              name="urgencia"
              value={urgencia}
              onChange={(e) => setUrgencia(e.target.value)}
            >
              <option selected>Seleccione Su Urgencia</option>
              <option value="Urgente">Urgente</option>
              <option value="Mediana">Mediana</option>
              <option value="Baja">Baja</option>
            </select>
            <input
              className="form-control my-3"
              type="text"
              name="fecha"
              value={fecha}
              readOnly
            ></input>
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 ">
                  <button
                    className="mb-3 btn btn btn-outline-danger"
                    onClick={() => SaveTiketUser()}
                  >
                    Ingresar ticket
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
