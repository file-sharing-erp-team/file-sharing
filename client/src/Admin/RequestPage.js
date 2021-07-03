import React, {useCallback, useState, useContext, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import { useHttp } from '../context/hooks/http.hook';
import { AuthContext } from '../context/Auth.context';
import { toast } from 'react-toastify';
import {NavBar} from './components/NavBar'
import {RequestPageCard} from './components/RequestPageCard'


export const RequestPage = () => {
    const _id = useParams().id
    const [info, setInfo] = useState(null)
    const {loading, error, request, clearError} = useHttp()
    const {token, userId} = useContext(AuthContext)

    const getInfo = useCallback(async () => {
        try{
            const data = await request(`/file_sharing/docrequest/${_id}`, 'GET', null, {
                Authorization: `Bearer ${token} `
             })
            setInfo(data)
        }catch(e){
            toast.error(e)
        }
    },[request, token, _id])

    useEffect(() => {
        getInfo()
    }, [getInfo])

    return(
        <div>
            <header>    
                <NavBar />
            </header>
            <div className="container row mx-auto" backgroundColor="white" height="100vh" width="80vw" style={{backgroundColor: "white", borderRadius: "5px",height:"85vh", overflow: "auto", marginTop: '2rem'}}>
                {!loading && info && <RequestPageCard info={info}/>}
            </div>
        </div>
    )
}