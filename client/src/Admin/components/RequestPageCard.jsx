import {Card, Button, Form} from 'react-bootstrap'
import {useState, useContext} from 'react'
import {TypeToTitle} from '../../components/TypeToTitle'
import {StatusIconComponent} from '../../components/StatusIconComponent'
import {AuthorComponent} from '../../components/AuthorComponent'
import {DocumentComponent} from '../../components/DocumentComponent'
import { toast } from 'react-toastify';
import { useHttp } from '../../context/hooks/http.hook';
import { AuthContext } from '../../context/Auth.context';
import {useParams} from 'react-router-dom'

export const RequestPageCard = ({info}) => {
    const {token, userId} = useContext(AuthContext)
    const {loading, error, request, clearError} = useHttp()
    const [res, setRes] = useState({
        id: useParams().id,
        message: "",
        status: "",
        sendFile: false,
        senderId: info.user_id,
        userId: userId
    })

    
    const changeHandler = event => {
        setRes({ ...res , [event.target.name]: event.target.value})
    }

    const updateHandler = async (e) => {
        try{
            e.preventDefault();
            if(res.status === "Отклонено"){
                res.status = 0
            }
            else if(res.status ==="В обработке"){
                res.status = 2
            }
            else if(res.status ==="Выполнено"){
                res.status = 3
            }
            console.log({...res})
            const data = await request('/file_sharing/admDocs/updateDocsStatus', 'POST', {...res}, 
            {
                Authorization: `Bearer ${token}`
            })
            
            //setRes(res)
            toast(data.message)
        }
        catch (e){
            toast.error(e.message)
        }
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
                        <Form >
                            <Form.Control name="message" as="textarea" rows={4} placeholder="Введите ответ" style={{height: "100px"}} onChange={changeHandler}/>
                            <br />
                            <h6>Установить статус</h6>
                            <Form.Control as="select" name="status" onChange={changeHandler}>
                                    <option>Отклонено</option>
                                    <option>В обработке</option>
                                    <option>Выполнено</option>
                            </Form.Control>
                            <br />
                            <Form.Check className="row-3"
                                type="checkbox"
                                id="checkbox"
                                label="Прикрепить сгенерированный файл"
                                style={{marginLeft:"3px"}}
                            />
                        </Form>

                    </Card.Body>
                    <Card.Footer >
                        <Button style={{float: "left"}} variant="primary">Открыть чат</Button>
                       <Button style={{float: "right"}} variant="success" onClick={updateHandler}>Отправить ответ</Button>
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