import {useContext} from 'react'
import {AuthContext} from '../context/Auth.context'
import {NavLink} from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { Navbar, Nav, Button, Dropdown, Form, Collapse } from 'bootstrap-4-react';

export const Navig = () => {
    const auth = useContext(AuthContext)
    const {userId} = useContext(AuthContext)
    const userLink = "/user/" + userId
    const settingsLink = "/settings/" + userId
    const history = useHistory()
    
    const searchHandler = event => {
        event.preventDefault()
    }

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
            <Form inline my="2 lg-0" onSubmit={searchHandler}>
              <Form.Input type="search" placeholder="Поиск..." mr="sm-2" />
              <Button outline success my="2 sm-0">Найти</Button>
            </Form>
            <Button className="ms-3" success my="2 sm-0" onClick={logoutHandler}>Выйти</Button>
          </Collapse>
        </Navbar>
      )
}