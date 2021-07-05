import React, {useState, useContext, useEffect, useCallback} from 'react';
import {NavBar} from './components/NavBar'
import {TicketList} from './components/TicketList'
import { toast } from 'react-toastify';
import { useHttp } from '../context/hooks/http.hook';
import { AuthContext } from '../context/Auth.context';

export const DashBoard = () => {
    const [tickets, setTickets] = useState(null)
    const {token, userId} = useContext(AuthContext)
    document.title = "FileSharing - DashBoard"
    
    const {loading, error, request, clearError} = useHttp()

    const getTickets = useCallback (
        async () => {
            try{
                const data = await request('/file_sharing/docrequest/all', 'GET', null, {
                   Authorization: `Bearer ${token} `
                })
               setTickets(data)
            }
            catch (e){
                toast.error(e.message)
            }
        }
    , [token, request])

    useEffect(() => {
        getTickets()
    }, [getTickets])

    return(
        <div>
            <NavBar />
            <div className="container row mx-auto" backgroundColor="white" height="100vh" width="80vw" style={{backgroundColor: "white", borderRadius: "5px",height:"85vh", overflow: "auto", marginTop: '2rem'}}>
                {(() => {
                    if(!loading && tickets){
                        return(
                            <TicketList tickets={tickets} />
                        )
                    }
                    else{
                       return(
                            <div>Новых заявок нет</div>
                       )
                    }
                })}
            </div>
        </div>
    )
}