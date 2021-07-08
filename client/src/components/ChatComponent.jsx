import {useState, useEffect, useCallback} from 'react'
import {Form, Card} from 'react-bootstrap'

export const ChatComponent = ({reqId}) => {
     const [chat, setChat] = useState(null)

     return(
        <Form>
            <Card style={{height:"100px"}}></Card>
            <Form.Control type="text" placeholder="Введите сообщение..." />
        </Form>
     )
}