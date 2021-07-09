import React, {useEffect, useCallback, useState, useContext} from 'react'
import {useParams} from 'react-router-dom'
import { useHttp } from '../context/hooks/http.hook';
import { AuthContext } from '../context/Auth.context';
import { toast } from 'react-toastify';
import {NavBar} from './components/NavBar' 
import { ChatList } from './components/ChatList';

export const MessagesList = () => {
    const [chats, setChats] = useState(null)
    const {loading, error, request, clearError} = useHttp()
    const {token, userId} = useContext(AuthContext)

    const getChats = useCallback(async () => {
        try{
            const data = await request(`/file_sharing/chat/getAllChats`, 'GET', null, {
                Authorization: `Bearer ${token} `
             })
            setChats(data.chats)
            console.log(data)
        }catch(e){
            toast.error(e)
        }
    },[request, token])

    useEffect(() => {
        getChats()
    }, [getChats])

    return(
        <div>
            <header>    
                <NavBar />
            </header>
            <div className="container row mx-auto" backgroundColor="white" height="100vh" width="80vw" style={{backgroundColor: "white", borderRadius: "5px",height:"85vh", overflow: "auto", marginTop: '2rem'}}>
                {!loading && chats && <ChatList style={{marginTop: "2rem"}} chats={chats} />}
            </div>
        </div>
    )
}