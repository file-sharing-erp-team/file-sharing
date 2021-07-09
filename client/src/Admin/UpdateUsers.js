import React, {useCallback, useState, useContext, useEffect} from 'react';
import { useHttp } from '../context/hooks/http.hook';
import { AuthContext } from '../context/Auth.context';
import { toast } from 'react-toastify';
import {NavBar} from './components/NavBar'
import {UsersList} from './components/UsersList'
import {Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

export const UpdateUsers = () => {
    const [info, setInfo] = useState(null)
    const {loading, error, request, clearError} = useHttp()
    const {token, userId} = useContext(AuthContext)
    const history = useHistory()
    document.title = "FileSharing - Пользователи"

    const getInfo = useCallback(async () => {
        try{
            const data = await request(`/file_sharing/admUser/getAllUsers`, 'GET', null, {
                Authorization: `Bearer ${token} `
             })
            setInfo({...data.allUsers})
            console.log(data.allUsers)
        }catch(e){
            toast.error(e)
        }
    },[request, token])

    const clickHandler = e => {
        history.push('/admin/users/create')
    }

    useEffect(() => {
        getInfo()
    }, [getInfo])

    return(
        <div>
            <header>    
                <NavBar />
            </header>
            <div className="container row mx-auto" backgroundColor="white" height="100vh" width="80vw" style={{backgroundColor: "white", borderRadius: "5px",height:"85vh", overflow: "auto", marginTop: '2rem'}}>
                {!loading && info && <UsersList users={info}/>}
                <Button className="mx-auto" style={{width:'30%',marginBottom:'5px'}} onClick={clickHandler}>Добавить пользователя</Button>
            </div>
        </div>
    )
}