import React, {useState, useContext, useEffect, useCallback} from 'react';
import {NavBar} from './components/NavBar'
import {TicketList} from './components/TicketList'
import { toast } from 'react-toastify';
import { useHttp } from '../context/hooks/http.hook';
import { AuthContext } from '../context/Auth.context';
import {Form, Button,  Col} from 'react-bootstrap'

export const DashBoard = () => {
    const [tickets, setTickets] = useState(null)
    const {token, userId} = useContext(AuthContext)
    document.title = "FileSharing - DashBoard"
    const {loading, error, request, clearError} = useHttp()
    const [form, setForm] = useState( {
        option: '',
        text: ''
    })

    const getTickets = useCallback (
        async () => {
            try{
                const data = await request('/file_sharing/admDocs/getDocsByProcess', 'GET', null, {
                   Authorization: `Bearer ${token} `
                })
               setTickets(data.findByProcess)
               if({...data} !== null){
                   console.log(true)
               }
               else{
                console.log(false)
               }
            }
            catch (e){
                toast.error(e.message)
            }
        }
    , [token, request])
    
    const searchHandler = async (e) => {
        try{
            e.preventDefault();
            
            console.log({...form})
            const data = await request('/file_sharing/user/login', 'POST', {...form})
            console.log(data)
            setTickets(data)
        }
        catch (e){
            toast.error(e.message)
        }
    }

    

    useEffect(() => {
        getTickets()
    }, [getTickets])

    return(
        <div>
            <NavBar />
            <div className="container mx-auto" height="100vh" width="80vw" style={{backgroundColor: "white", borderRadius: "5px",height:"85vh", overflow: "auto", marginTop: '2rem'}}>
                <Form  style={{marginTop:'1rem', width:'100%'}}>
                    <Form.Group className="mx-auto">
                        <Form.Row className="mx-auto">
                            <Col>
                                <Form.Control as="select" name="option">
                                    <option>Статус выполнения</option>
                                    <option>Новые</option>
                                    <option>Активные</option>
                                </Form.Control>
                            </Col>
                            <Col>
                                <Form.Control type="text" id="search" placeholder="Поиск" name="groupId"/>
                            </Col>
                            <Col>
                                <Button variant="success" onClick={searchHandler}>Найти</Button>
                            </Col>
                        </Form.Row>
                        
                    </Form.Group>
                </Form>
                {!loading && tickets && <TicketList tickets={tickets} />}
            </div>
        </div>
    )
}