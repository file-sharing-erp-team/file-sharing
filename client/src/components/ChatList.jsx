import {ChatCard} from './ChatCard'
import {Form, Row , Col, Button} from 'react-bootstrap'
import {ChatContext} from '../context/ChatContext'
import {AuthContext} from '../context/Auth.context'
import {useContext, useEffect, useCallback, useState} from 'react'
import { useHttp } from '../context/hooks/http.hook';
import { toast } from 'react-toastify';
import {useChat} from '../context/hooks/chat.hook'
import { MessageList } from './MessageList'

export const ChatList = ({chats}) => {
    
    const [messages, setMessages] = useState(null)
    
    const {loading, error, request, clearError} = useHttp()
    const {token, userId} = useContext(AuthContext)
    const {chatId}  = useChat()
    const [form, setForm] = useState( {
        text: '',
        chat_id: chatId, 
        user_id: userId
    })

    const getChatMessage = useCallback(async () => {
        try{
            if(chatId){
                const data = await request(`/file_sharing/msg/showMessages`, 'GET', null, {
                    Authorization: `Bearer ${token} `,
                    chat_id: chatId
                 })
                 setMessages(data.showMessages)
                 
            }
        }catch(e){
            toast.error(e)
        }
    },[request, token, chatId])

    useEffect(() => {
        getChatMessage()
    }, [getChatMessage])

    const changeHandler = event => {
        setForm({ ...form , [event.target.name]: event.target.value})
    }

    const sendMessage = async (e) => {
        try{
           if(chatId){
                e.preventDefault();
                console.log(form)
                form.chat_id = chatId
                const data = await request('/file_sharing/msg/send', 'POST', {...form},
                {
                    Authorization: `Bearer ${token} `
                })
                console.log(data)
                getChatMessage()
                const inp = document.getElementById('mes')
                inp.value = ''
           }
            
        }
        catch (e){
            toast.error(e.message)
        }
    }

    if(!chats){
        return(
            <>
                <h4>Нет доступных чатов</h4>
            </>
        )
    }
    return(
        <>
            
            <Row style={{height: "100%", width: "100%"}}>
                <Col xs={3} style={{height: "100%", width: "400px"}}>
                    <div className="chat-title" style={{backgroundColor:"white", width: "100%", height: "30px" ,textAlign: "center", marginLeft: "-4px"}}>
                        <h5 className=" my-auto" style={{ width: '270px'}}>Чаты</h5>
                    </div>
                    <div className="list-copmonent" style={{ height: "93.5%", backgroundColor:"#e3e3e3", width: '270px', overflow: "auto"}}>
                        <div className="list" style={{marginLeft: "10px"}}>
                            {Object.keys(chats).map((key) => {
                                return(
                                    <ChatCard key={key} chat={{...{...chats[key]}}} />
                                )
                            })}
                        </div>
                    </div>
                </Col>
                <Col xs={7} style={{height: "100%",marginLeft: "10%"}}>
                    <Form style={{height: "90%"}}>
                        <div className="chat-title" style={{backgroundColor:"white", height: "30px" ,textAlign: "center", marginLeft: "-4px"}}>
                            <h5 style={{ width: '270px'}}>Чат</h5>
                        </div>
                        <div className="messages-list" style={{ height: "93.5%", backgroundColor:"#e3e3e3", width: '100%', overflow: "auto"}}>
                            {!loading && messages && <MessageList id="block" messages={messages}/> }
                        </div>
                        <br />
                        <Form.Group>
                            <Row>
                                <Col xs={10}>
                                    <Form.Control className="align-bottom" id="mes" name="text" type="text" onChange={changeHandler} placeholder="Введите сообщение" /> 
                                </Col>
                                <Col xs={2} style={{padding: 0, marginLeft: '-7px'}}>
                                    <Button variant="success" onClick={sendMessage}>Отправить</Button>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            
        </>
        
    )
}