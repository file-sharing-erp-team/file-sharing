
import { Card } from 'bootstrap-4-react'; 

export const RequestCard = ({requestInfo}) => {
    //const route = "/req/" + requestInfo.id
    return(
        <>
            <Card style={{ width: '18rem', height:"12rem" , marginTop:"1rem", marginLeft:"2rem"}}>
                <Card.Body>
                    <Card.Title>{requestInfo.title}</Card.Title>
                    <br/>
                    <Card.Subtitle>{requestInfo.status === 1 & <i class="bi bi-hourglass-split"></i>}</Card.Subtitle>
                    <br/>
                    <br/>
                    <Card.Link href="/">Подробнее</Card.Link>
                </Card.Body>
            </Card>
        </>
    )
}