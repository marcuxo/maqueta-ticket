export const GetTickets = () => {
    return new Promise(async (resolve, reject) => {
        let query = await fetch("http://localhost:4080/get_ticket",{
          method: 'GET',
          headers: {
            'authorization': "paico2021",
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
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
