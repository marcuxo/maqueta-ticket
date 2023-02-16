import React from 'react'
//Este api es para cerrar los tickets, conclusion = la conclusion de cada ticket que va en el modal, id_ = identificador de el ticket
export const CerrarTicket = ({conclusion,id_}) => {
    // console.log(conclusion);
    return new Promise(async (resolve, reject) => {
        let query = await fetch("http://localhost:4080/cerrar_ticket",{
          method: 'POST',
          headers: {
            'authorization': "paico2021",
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            conclusion,id_
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
