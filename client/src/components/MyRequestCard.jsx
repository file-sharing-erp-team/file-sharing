import {TypeToTitle} from './TypeToTitle'
import { Card } from 'bootstrap-4-react'; 

export const MyRequestCard = ({requestInfo}) => {
    console.log(requestInfo )
    //const route = "/req/" + requestInfo.id
    if(!requestInfo){
        return(
            <>
            Нет информации
            </>
        )
    }
    return(
        <>
            <Card style={{ width: '15rem', height:"12rem" , marginTop:"1rem", marginLeft:"2rem", marginBottom:"1rem" , padding:0}}>
                <Card.Body>
                    <Card.Title><TypeToTitle type={requestInfo.type} /></Card.Title>
                    <br/>
                    <Card.Subtitle>{requestInfo.status === 1 & <i class="bi bi-hourglass-split"></i>}</Card.Subtitle>
                    <br/>
                    
                    <Card.Link style={{fontSize:'25px'}} href="/">Подробнее</Card.Link>
                </Card.Body>
            </Card>
        </>
    )
}