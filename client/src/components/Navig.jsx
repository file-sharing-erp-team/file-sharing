import {useContext, useCallback, useState,useEffect} from 'react'
import {AuthContext} from '../context/Auth.context'
import {NavLink} from 'react-router-dom'
import { useHistory } from "react-router-dom";
import {useHttp} from '../context/hooks/http.hook'
import { Navbar, Nav, Button, Collapse } from 'bootstrap-4-react';
import {Dropdown, Badge} from 'react-bootstrap'
import NotificationsIcon from '@material-ui/icons/Notifications';
import { NotificationComponent } from './NotificationComponent';
import './Notify.scss'

export const Navig = () => {
    const auth = useContext(AuthContext)
    const {token , userId} = useContext(AuthContext)
    const history = useHistory()
    const [notifications, setNotifications] = useState(null)
    const [count, setCount] = useState(0)
    const {loading, error, request, clearError} = useHttp()
    
    
    
    const getNotifications = useCallback(async () => {
      try{
         
            const data = await request(`/file_sharing/notifications/getNotifications`, 'GET', null, {
              Authorization: `Bearer ${token} `
            })
            setNotifications(data.notifications)
            console.log(data)
            let c = 0;
            for(let i = 0; i < data.notifications.length; i++){
              if(data.notifications[i].checked === false){
                c++;
              }
            }
            setCount(c)
          
      }catch(e){
          console.log(e)
      }
    },[request, token])

    useEffect(()=> {
      getNotifications()
    }, [getNotifications])



    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/auth')
    }
    return (
        <Navbar expand="lg" light bg="light">
          <Navbar.Brand href="/my">
            <img
              alt=""
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            File Sharing
          </Navbar.Brand>
          <Navbar.Toggler target="#navbarSupportedContent" />
          <Collapse navbar id="navbarSupportedContent">
            <Navbar.Nav mr="auto">
              <Nav.Item active>
                <Nav.Link href="/my">Главная</Nav.Link>
              </Nav.Item>
              <Nav.Item active>
                <Nav.Link href="/create">Новая заявка</Nav.Link>
              </Nav.Item >
              <Nav.Item active>
                <Nav.Link href="/messages">Почта</Nav.Link>
              </Nav.Item>
              <Nav.Item active>
                <Dropdown onClick={getNotifications} style={{marginRight: '8px'}} >
                  <Dropdown.Toggle  variant="light" id="dropdown-basic"  menuAlign="right">
                    <NotificationsIcon /> 
                    <Badge variant="primary">{count}</Badge>
                  </Dropdown.Toggle>
                  <Dropdown.Menu align="left">
                    {!loading && notifications && <NotificationComponent notifications={notifications} />}
                  </Dropdown.Menu>
              </Dropdown>
              </Nav.Item>
            </Navbar.Nav>
            
            <Button className="ms-3" success my="2 sm-0" onClick={logoutHandler}>Выйти</Button>
          </Collapse>
        </Navbar>
      )
}