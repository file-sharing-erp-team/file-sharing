import { Card } from 'bootstrap-4-react'; 
import { AuthorComponent } from '../../components/AuthorComponent';
import {TypeToTitle} from '../../components/TypeToTitle'
import {StatusIconComponent} from '../../components/StatusIconComponent'

export const TicketCard = ({ticket}) => {
    const link = `/admin/info/${ticket.id}`
    return(
        <>
            <Card style={{ width: '15rem', height:"12rem" , marginTop:"1rem", marginLeft:"2rem", marginBottom:"1rem" , padding:0}}>
                <Card.Body>
                    <Card.Title><TypeToTitle type={ticket.type} /></Card.Title>
                    <h6><AuthorComponent authorId={ticket.user_id} /></h6>
                    <Card.Subtitle><StatusIconComponent status={ticket.status} /></Card.Subtitle>
                    <br />
                    <br/>
                    <Card.Link href={link}>Ответить</Card.Link>
                </Card.Body>
            </Card>
        </>
    )
}