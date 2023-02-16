import React from 'react'
//Este api es para poder guardar los tickets y dejarlos como "Sin Asignar"
export const SaveTickets = ({state, fecha, titulo, descripcion, urgencia, ubicacion}) => {
    // console.log(state, fecha, titulo, descripcion, urgencia, ubicacion);
    return new Promise(async (resolve, reject) => {
        let query = await fetch("http://localhost:4080/guardar_ticket",{
          method: 'POST',
          headers: {
            'authorization': "paico2021",
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            state, fecha, titulo, descripcion, urgencia, ubicacion
          })
        })
        let resp_ticket = await query.json();
        // console.log(resp_ticket.body);
    
        if(resp_ticket.body){
          resolve(resp_ticket.body)
        }else{
          resolve(resp_ticket.body)
        }
      })
}
