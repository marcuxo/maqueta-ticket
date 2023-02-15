import React from 'react'

export const Filtro = (tecnico,passtecnico) => {
  return new Promise(async (resolve, reject) => {
        let query = await fetch("http://localhost:4080/ticket.filtro",{
          method: 'POST',
          headers: {
            'authorization': "paico2021",
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            tecnico,passtecnico  
        })
        })
        let resp_ticket = await query.json();
        console.log(tecnico.body, passtecnico.body);
        
    
        if(resp_ticket.body){
          resolve(resp_ticket.body)
        }else{
          resolve(resp_ticket.body)
        }
      })
  
}
