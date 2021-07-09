import {useContext} from 'react'
import {ChatContext} from '../../context/ChatContext'
import {Card} from 'react-bootstrap'
import './ChatCard.scss'

export const ChatCard = ({chat}) => {

    const curChat = useContext(ChatContext)

    const chatHandler = () => {
        curChat.push(chat.id)
    }
    console.log(chat)
    if(!chat){
        return(
            <Card id="card" style={{width: '250px',height: '75px', backgroundColor: 'light-gray', marginTop: "1rem"}}>
                <Card.Title>Ошибка отображения чата</Card.Title>
            </Card>
        )
    }
    else{
        return(
            <Card id="card" style={{width: '250px',height: '75px', backgroundColor: 'light-gray', marginTop: "1rem", cursor: 'pointer'}} onClick={chatHandler}>
                <Card.Title style={{fontSize: "15px", padding: 0, marginTop: "4px", marginLeft: "4px"}}>{chat.chat_name}</Card.Title>
                <Card.Body style={{fontSize: "10px", padding: 0, marginLeft: "4px"}}>{chat.last_message}</Card.Body>
            </Card>
        )
    }
}