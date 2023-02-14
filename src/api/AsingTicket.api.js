import React from 'react'

export const AsingTicket = ({id,state}) => {
    console.log(id,state);
    return new Promise(async (resolve, reject) => {
        let query = await fetch("http://localhost:4080/asign_ticket",{
          method: 'POST',
          headers: {
            'authorization': "paico2021",
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              user:state,
              ticket_id:id
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
