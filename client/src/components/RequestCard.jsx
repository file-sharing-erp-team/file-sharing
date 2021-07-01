
import { Card } from 'bootstrap-4-react'; 

export const RequestCard = ({info}) => {
   const link = "/create/" + info.type
   return(
    <>
        <Card style={{ width: '15rem', height:"12rem" , marginTop:"1rem", marginLeft:"2rem", marginBottom:"1rem" , padding:0}}>
            <Card.Body>
                <Card.Title>{info.title}</Card.Title>
                <br/>
                <Card.Subtitle>Получить {info.title}</Card.Subtitle>
                <br/>
                <br/>
                <Card.Link href={link}>Заказать</Card.Link>
            </Card.Body>
        </Card>
    </>
   )
}