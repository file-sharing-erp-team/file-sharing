import {useContext, useCallback, useState} from 'react'
import {AuthContext} from '../context/Auth.context'
import {NavLink} from 'react-router-dom'
import { useHistory } from "react-router-dom";
import {useHttp} from '../context/hooks/http.hook'
import { Navbar, Nav, Button, Collapse } from 'bootstrap-4-react';
import {Dropdown} from 'react-bootstrap'
import NotificationsIcon from '@material-ui/icons/Notifications';
import { NotificationComponent } from './NotificationComponent';

export const Navig = () => {
    const auth = useContext(AuthContext)
    const {token , userId} = useContext(AuthContext)
    const userLink = "/user/" + userId
    const settingsLink = "/settings/" + userId
    const history = useHistory()
    const [notifications, setNotifications] = useState(null)
    const {loading, error, request, clearError} = useHttp()
    
    const getNotifications = useCallback(async () => {
      try{
          const data = await request(`/file_sharing/notifications/getNotifications`, 'GET', null, {
              Authorization: `Bearer ${token} `
           })
           setNotifications(data.notifications)
          console.log(data.notifications)
          
      }catch(e){
          console.log(e)
      }
    },[request, token])



    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/auth')
    }
    return (
        <Navbar expand="lg" light bg="light">
          <Navbar.Brand href="/my">
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
            </Navbar.Nav>
            <Dropdown onClick={getNotifications}>
              <Dropdown.Toggle  variant="light" id="dropdown-basic">
                <NotificationsIcon />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {!loading && notifications && <NotificationComponent notifications={notifications} />}
              </Dropdown.Menu>
            </Dropdown>
            <Button className="ms-3" success my="2 sm-0" onClick={logoutHandler}>Выйти</Button>
          </Collapse>
        </Navbar>
      )
}