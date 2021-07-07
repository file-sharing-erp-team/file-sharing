import {TicketCard} from './TicketCard'

export const TicketList = ({tickets}) => {
    console.log(tickets)
    if(tickets instanceof Array){
       
        return(
            <>
                 {tickets.map(ticket => {
                     return(
                         <TicketCard ticket={ticket} />
                     )
                 })}
            </>
         )
    }
    else{
        return(
            <>
                <h4 className="my-auto" style={{left: '-50%'}}>Новых заявок нет</h4>
            </>
        )
    }
}