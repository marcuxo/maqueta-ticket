import React from 'react'
//Este api es para que el ticket se pueda poner y mostrar en proceso 
export const TicketProcess = ({id_,estado}) => {
    // console.log(id_);
    return new Promise(async (resolve, reject) => {
        let query = await fetch("http://localhost:4080/ticket_process",{
          method: 'POST',
          headers: {
            'authorization': "paico2021",
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id_,estado
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
