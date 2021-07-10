import {Dropdown} from 'react-bootstrap'
import {AuthContext} from '../context/Auth.context'
import { useHistory } from "react-router-dom";
import {useHttp} from '../context/hooks/http.hook'
import {useContext, useCallback, useState,useEffect} from 'react'
import {NotificationType} from './NotificationType'

export const NotificationCard = ({notification}) => {
    const history = useHistory()
    const {token , userId} = useContext(AuthContext)
    const {loading, error, request, clearError} = useHttp()

    const clickHandler = async (e) => {
        try{
            e.preventDefault();
            
            const data = await request('/file_sharing/notifications/updateStatus', 'POST', {id: notification.id},
            {
                Authorization: `Bearer ${token} `
            })
            history.push(notification.link)
        }
        catch (e){
            console.log(e)
        }
        
    }

    if(notification){
        return(
            <Dropdown.Item key={notification.id} onClick={clickHandler} id="dropdown" >
                <NotificationType  type={notification.type} />     <span style={{fontSize:'18px', marginBottom:'15px'}}>{notification.text}</span>
            </Dropdown.Item>
        )
    }
}