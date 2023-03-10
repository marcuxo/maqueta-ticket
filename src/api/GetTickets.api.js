import { BsCheckLg } from "react-icons/bs";
//Este api es para obtener los tickets de cada usuario
export const GetTickets = ({state}) => {
    // console.log(state);
    return new Promise(async (resolve, reject) => {
        let query = await fetch("http://localhost:4080/get_ticket_user",{
          method: 'POST',
          headers: {
            'authorization': "paico2021",
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              user:state
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
