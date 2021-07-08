import {useState, useEffect, useCallback} from 'react'
import {Form} from 'react-bootstrap'

export const ChatComponent = ({reqId}) => {
     const [chat, setChat] = useState(null)

     return(
        <Form>
            <Form.Control type="text" placeholder="Введите сообщение..." />
        </Form>
     )
}