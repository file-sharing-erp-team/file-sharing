import {TypeToTitle} from './TypeToTitle'
import {StatusIconComponent} from './StatusIconComponent'
import { Card } from 'bootstrap-4-react'; 
import { Button} from 'react-bootstrap'
//import {ChatComponent} from './ChatComponent'
import {AuthorComponent} from './AuthorComponent'
import { DocumentComponent } from './DocumentComponent';
import { useHistory } from 'react-router-dom';

export const RequestInfoComponent = ({info}) => {
    const history =  useHistory()
    const clickHandler = e => {
        e.preventDefault();
        history.push('/messages')
    }
    if(info){
        return(
            <>
                <Card style={{width: "100%", border:  "none", height:"85vh", overflow: "auto"}}>
                    <Card.Body>
                        <h3 className="row-3">Заявление на <TypeToTitle type={info.type}/> #{info.id}</h3>
                        <p className="row-3">Статус: <StatusIconComponent status={info.status} /> </p>
                        <p className="row-3">Отправитель: <AuthorComponent authorId={info.user_id}/></p>
                        <p className="row-3">Прикрепленные документы: <br /> <DocumentComponent reqId={info.id} /></p>
                    </Card.Body>
                    <Card.Footer >
                        <Button style={{float: "left"}} variant="primary" onClick={clickHandler}>Открыть чат</Button>
                       <Button style={{float: "right"}} variant="danger">Отменить заявление</Button>
                    </Card.Footer>
                </Card>
            </>
        )
    }
    return(
        <>
                <h3>Нет информации по заявлению</h3>
        </>
    )
}