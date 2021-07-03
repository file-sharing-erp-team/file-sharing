import { Card } from 'bootstrap-4-react'; 
import { AuthorComponent } from '../../components/AuthorComponent';

export const TicketCard = ({ticket}) => {
    return(
        <>
            <Card style={{ width: '15rem', height:"12rem" , marginTop:"1rem", marginLeft:"2rem", marginBottom:"1rem" , padding:0}}>
                <Card.Body>
                    <Card.Title>{ticket.title}</Card.Title>
                    <br/>
                    <Card.Subtitle>{ticket.status === 1 & <i class="bi bi-hourglass-split"></i>}</Card.Subtitle>
                    <h4><AuthorComponent authorId={ticket.author} /></h4>
                    <br/>
                    <br/>
                    <Card.Link href="/">Подробнее</Card.Link>
                </Card.Body>
            </Card>
        </>
    )
}