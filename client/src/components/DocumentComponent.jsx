import React from 'react';
import {useState, useContext, useCallback, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {useHttp} from '../context/hooks/http.hook' 
import { AuthContext } from '../context/Auth.context';
import { toast } from 'react-toastify';
import {DocList} from './DocList'

export const DocumentComponent = ({reqId}) => {
   
    const {token} = useContext(AuthContext)
    const {loading, error, request, clearError} = useHttp()
    const [info, setInfo] = useState(null)

    const getInfo = useCallback(async () => {
        try{
            const data = await request(`/file_sharing/docs/getDocById/${reqId}`, 'GET', null, {
                Authorization: `Bearer ${token} `
             })
            setInfo(data.checkDoc)
            console.log(data.checkDoc)
            
        }catch(e){
            toast.error(e)
        }
    },[request, token, reqId])

    useEffect(() => {
        getInfo()
    }, [getInfo])


    return(
        <>
           {!loading &&  info &&<DocList docs={info}/>}
        </>
    )
}