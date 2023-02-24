import React from 'react'
//Este api es para el filtro de usuario ariztia, tecnico = usuario de tecnico, passTecnico = es la contraseña de cada tecnico
export const Filtro_user = ({Ususario}) => {
  return new Promise(async (resolve, reject) => {
        let query = await fetch("http://localhost:4080/ticket_filtro_user",{
          method: 'POST',
          headers: {
            'authorization': "paico2021",
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            Ususario
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