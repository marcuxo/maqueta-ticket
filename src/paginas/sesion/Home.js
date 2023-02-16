import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  // almacena el estado del usuario
  const [Ususario, setUsusario] = useState("");

  useEffect(() => {
    //busca los datos en local storage(memoria local del navegador)
    let user = localStorage.getItem("usuario");
    // verifica si ya hay un usuario guardado en el local storage
    if (user !== null) setUsusario(user);
  }, []);

  const OnSubmit = async () => {
    //guarda el usuario en local storage(memoria local del navegador)
    localStorage.setItem("usuario", Ususario);
    //redirige a la session sel usuario
    navigate("/tickets", { state: Ususario });
  };
{/* Este es el inicio de sesion del usuario cualquiera  */}
  return (
    <div className="container-fluid fondo-total">
      <div className="row">
        <div className="col-6 text-center le">
          <img src="/img/logo_ariztia.png" />
        </div>
        <div className="col-5 fondo-Login rounded-4 text-center ml-1 pad border border-secondary">
          <form className="px-4 py-2" />
          <div className="mb-3">
            <h2 className="py-4 rounded-5 lel">Inicio Usuario</h2>
            <label
              for="exampleDropdownFormEmail1"
              className="form-label mb-3 h4 pop "
            >
              Ingrese Correo
            </label>

            <input
              name="usuario"
              value={Ususario}
              onChange={(e) => setUsusario(e.target.value)}
              type="email"
              className="form-control pop"
              id="exampleDropdownFormEmail1"
              placeholder="Email@ariztia.com"
            />
          </div>

          <button
            type="submit"
            className="btn btn-outline-danger pop"
            onClick={() => OnSubmit()}
          >
            Ingresar
          </button>
          {/* boton para entrar al inicio de tecnico */}
          <div className="space"></div>
          <button
            type="submit"
            class="btn btn-outline-danger pop"
            onClick={() => navigate("/login")}
          >
            Ingresar Tecnico
          </button>
        </div>
      </div>
    </div>
  );
};
