import React, {useState, useContext, useCallback, useEffect} from 'react';
import {Navig} from '../components/Navig'
import { MyRequestCard } from '../components/MyRequestCard';
import {useHttp} from '../context/hooks/http.hook' 
import { AuthContext } from '../context/Auth.context';
import { toast } from 'react-toastify';
import { MyRequestList } from '../components/MyReqList';
import {LoadingComponent} from '../components/LoadingComponent'

export const ReqPage = () => {
    document.title = "FileSharing - Мои заявки"
   
    const [info, setInfo] = useState(null)
    const {token, userId} = useContext(AuthContext)
    const {loading, error, request, clearError} = useHttp()
    let array;

    const getInfo = useCallback(async () => {
        try{
            const data = await request(`/file_sharing/docs/getDocs`, 'GET', null, {
                Authorization: `Bearer ${token} `
             })
            setInfo(data.userDocs)
            console.log(data.userDocs)
            
        }catch(e){
            toast.error(e)
        }
    },[request, token])

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
                {loading && <LoadingComponent />}
                {!loading && info && <MyRequestList requests={info} />}
                
            </div>
        </div>
    )
}