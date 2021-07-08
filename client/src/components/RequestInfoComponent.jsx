import {TypeToTitle} from './TypeToTitle'
import {StatusIconComponent} from './StatusIconComponent'
import { Card } from 'bootstrap-4-react'; 
import {ChatComponent} from './ChatComponent'
import {AuthorComponent} from './AuthorComponent'

export const RequestInfoComponent = ({info}) => {
    if(info){
        return(
            <>
                <Card style={{width: "100%", border:  "none", height:"85vh", overflow: "auto"}}>
                    <Card.Body>
                        <h3 className="row-3">Заявление на <TypeToTitle type={info.type}/> #{info.id}</h3>
                        <p className="row-3">Статус: <StatusIconComponent status={info.status} /> </p>
                        <p className="row-3">Отправитель: <AuthorComponent authorId={info.user_id}/></p>
                    </Card.Body>

                    <Card.Footer>
                        <p>Чат</p>
                        <ChatComponent />
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