import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Filtro } from "../../api/Filtro.api";

export const Login = () => {
  const navigate = useNavigate("");
  //tecnico guarda el estado del tecnico
  const [tecnico, setTecnico] = useState("");
  //passTecnico es para guardar la contraseña del tecnico
  const [passTecnico, setPassTecnico] = useState("");
//funcion que filtra a los user por @Ariztia.com
  async function filtro() {
    // console.log('filtro',tecnico,passTecnico);
    //se almacena la division("@") del correo del tecnico
    let correo = tecnico.split("@")
    // console.log(correo);
    //verificar si es correo corporativo
    if (correo[1]==="ariztia.com") {
      // console.log("el correo corresponde");
      //consulta al servidor si la credencial existe en la base de datos
        let login_ = await Filtro({tecnico,passTecnico})
        // console.log(login_);
        //si la credencial es correcta 
        if (login_.success) {
          //redirige a home tecnico
          navigate("/home_tecnico", {state: login_.user });
        }else{
          //si las credenciales no son correctas muestra alerta
          alert("El usuario o la contraseña son incorrectos.")
        }

    }else{
      alert("Correo no corresponde");

    }
  }
 
  return (
    <> {/* este es el login de tecnicos */}
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
              {/* boton para regresar al login de usuario */}
            <button
              className="btn btn-outline-danger pop"
              type="submit"
              onClick={() => navigate(-1)}
            >
              Regresar
            </button>
            {/* boton para ingresar al menu de tecnico */}
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
