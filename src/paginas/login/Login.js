import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate("");
  const [tecnico, setTecnico] = useState("");
  const [passTecnico, setPassTecnico] = useState("");

  async function filtro() {
    // console.log('filtro',tecnico,passTecnico);
    let correo = tecnico.split("@")
    console.log(correo);
    if (correo[1]==="ariztia.com") {
      // console.log("el correo corresponde");
    navigate("/home_tecnico", {state: tecnico });

    }else{
      console.log("correo no corresponde");
    }
  }
 
  return (
    <>
      <div className="container-fluid fondo-total">
        <div className="row">
          <div className="col-6 text-center le">
            <img src="/img/logo_ariztia.png" />
          </div>
          <div className="col-5 fondo-Login rounded-4 text-center ml-1 pad border border-secondary">
            <h2 className="lel py-4 rounded-5">Inicio Tecnico</h2>
            <form class="px-4 py-2" />
            <div class="mb-3">
              <label
                for="exampleDropdownFormEmail1"
                class="form-label mb-3 h4 pop"
              >
                Ingrese Correo
              </label>

              <input
                name="tecnico"
                value={tecnico}
                onChange={(e) => setTecnico(e.target.value)}
                type="email"
                class="form-control pop"
                id="exampleDropdownFormEmail1"
                placeholder="Email@ariztia.com"
              />
            </div>

            <form class="px-4 py-2" />
            <div class="mb-3">
              <label
                for="exampleDropdownFormEmail1"
                class="form-label mb-3 h4 pop"
              >
                Ingrese Contraseña
              </label>

              <input
                name="tecnico"
                value={passTecnico}
                onChange={(e) => setPassTecnico(e.target.value)}
                type="password"
                class="form-control pop"
                id="passwordTecnico"
                placeholder="Contraseña"
              />
            </div>

            <button
              className="btn btn-outline-danger pop"
              type="submit"
              onClick={() => navigate(-1)}
            >
              Regresar
            </button>
            <div className="space"></div>
            <button
              type="submit"
              class="btn btn-outline-danger pop"
              onClick={() => filtro()}
            >
              Ingresar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
