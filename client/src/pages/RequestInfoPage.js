import React from 'react';
import {useState, useContext, useCallback, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {Navig} from '../components/Navig'
import {useHttp} from '../context/hooks/http.hook' 
import { AuthContext } from '../context/Auth.context';
import { toast } from 'react-toastify';
import {RequestInfoComponent} from '../components/RequestInfoComponent'
import {LoadingComponent} from '../components/LoadingComponent'

export const RequestInfoPage = () => {
    const id  = useParams().id
    const {token, userId} = useContext(AuthContext)
    const {loading, error, request, clearError} = useHttp()
    const [info, setInfo] = useState(null)

    const getInfo = useCallback(async () => {
        try{
            const data = await request(`/file_sharing/docs/getDocReq/${id}`, 'GET', null, {
                Authorization: `Bearer ${token} `
             })
            setInfo(data.checkDoc)
            console.log(data.checkDoc)
            
        }catch(e){
            toast.error(e)
        }
    },[request, token, id])

    useEffect(() => {
        getInfo()
    }, [getInfo])

    return(
        <div className="block">
            <header>
                <Navig />
            </header>
            <br />
            <div className="container row mx-auto" height="100vh" width="80vw" style={{backgroundColor: "white", borderRadius: "5px",height:"85vh", overflow: "auto"}}>
                
               {loading &&  <LoadingComponent />}
               {!loading && info && <RequestInfoComponent info={info} />}
                
            </div>
        </div>
    )
}