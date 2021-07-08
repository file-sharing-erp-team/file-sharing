import {TicketCard} from './TicketCard'

export const TicketList = ({tickets}) => {
    console.log(tickets)
    if(tickets instanceof Array){
       
        return(
            <div className="row" style={{paddingTop: 0, marginTop: 0, width: '100%'}}>
                 {tickets.map(ticket => {
                     return(
                         <TicketCard ticket={ticket} />
                     )
                 })}
            </div>
         )
    }
    else{
        return(
            <>
                <h4 className="mx-auto my-auto" style={{left: '-50%'}}>Новых заявок нет</h4>
            </>
        )
    }
}