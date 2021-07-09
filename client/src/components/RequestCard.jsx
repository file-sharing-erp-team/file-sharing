
import { Card } from 'bootstrap-4-react'; 

export const RequestCard = ({info}) => {
   const link = "/create/" + info.type
   return(
    <>
        <Card style={{ width: '15rem', height:"auto" , maxHeight:'13rem',  marginTop:"1rem", marginLeft:"2rem", marginBottom:"1rem" , padding:0, hyphens: "auto", hyphenateLimitChars: "6 3 2"}}>
            <Card.Body style={{display:"block", float: "left"}}>
                <Card.Title>{info.title}</Card.Title>
                <br/>
            </Card.Body>
            <Card.Footer>
                <Card.Link className="mx-auto" href={link}>Заказать</Card.Link>
            </Card.Footer>
        </Card>
    </>
   )
}