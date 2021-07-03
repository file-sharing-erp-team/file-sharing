import {TicketCard} from './TicketCard'

export const TicketList = ({tickets}) => {
    if(tickets.length === 0){
        return(
            <>
                <h4>Новых заявок нет</h4>
            </>
        )
    }
    else{
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
}