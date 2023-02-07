import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  // almacena el estado del usuario
  const [Ususario, setUsusario] = useState("");

  // verifica si ya hay un usuario guardado en el locar storage
  useEffect(() => {
    let user = localStorage.getItem("usuario");
    if (user !== null) setUsusario(user);
  }, []);

  //guarda y redirige a la session sel usuario
  const OnSubmit = async () => {
    localStorage.setItem("usuario", Ususario);
    navigate("/tickets", { state: Ususario });
  };

  return (
    <div className=''>
      <div className=''>
        <div className=''>
          <button className=''>Ingreso Tecnicos</button>
        </div>
        <div className="col-5 fondo-Login rounded-4 text-center ml-1 pad border border-secondary">
          
          <form class="px-4 py-2" />
          <div class="mb-3">
            <label for="exampleDropdownFormEmail1" class="form-label mb-3 h4">
              Ingrese Correo
            </label>

            <input
              name="usuario"
              value={Ususario}
              onChange={(e) => setUsusario(e.target.value)}
              type="email"
              class="form-control"
              id="exampleDropdownFormEmail1"
              placeholder="email@ariztia.com"
            />
          </div>

          <button type="submit" class="btn btn-outline-danger"
          onClick={()=>OnSubmit()}
          >
            Ingresar
          </button>
          <div className="space"></div>
          <button type="submit" class="btn btn-outline-danger"
          
          >
            Ingresar Tecnico
          </button>
        </div>
      </div>
    </div>
  );
};
