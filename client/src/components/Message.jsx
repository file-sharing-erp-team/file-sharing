import {Card} from 'react-bootstrap'
import {AuthorComponent} from './AuthorComponent'
import { useHttp } from '../context/hooks/http.hook';

export const Message = ({message}) => {
    const {loading, error, request, clearError} = useHttp()
    if(message){
        return(
            <>
            {!loading && 
                <Card className="mx-auto" style={{width:'500px', marginTop:'5px',marginBottom:'5px'}}>
                    <Card.Title style={{fontSize: "15px", padding: 0, marginTop: "4px", marginLeft: "4px"}}>{!loading && <AuthorComponent authorId={message.author_id} />}</Card.Title>
                    <Card.Body style={{fontSize: "12px", padding: 0, marginLeft: "4px", marginTop:"-2px"}}>{message.text}</Card.Body>
                </Card>
            }
            </>
        )
    }
}