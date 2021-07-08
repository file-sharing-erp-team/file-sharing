import { useContext, useState, useEffect, useCallback } from 'react'
import { AuthContext } from '../context/Auth.context'
import {useHttp} from '../context/hooks/http.hook'
import {AuthorName} from './AuthorName'

export const AuthorComponent = ({authorId}) => {
    const [name , setName] = useState('')
    const [lastName , setLastName] = useState('')
    const {request, loading} = useHttp()
    const {token} = useContext(AuthContext)

    const getName = useCallback(
        async () => {
            const userName = await request(`/file_sharing/user/getInfo/${authorId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setName(userName.firstName)
            setLastName(userName.lastName)
        },
        [token, authorId , request]
    )

    

    useEffect(()=>{
        getName()
    },[getName])

    if(!authorId){
        return(
            <p>Автор не найден</p>
        )
    }

    return(
        <>
            {!loading && name && 
                <>
                    <AuthorName name={name} lastName={lastName}/>
                </>
            }
            {!name && <>Заявитель не найден</>}
        </>
    )
}