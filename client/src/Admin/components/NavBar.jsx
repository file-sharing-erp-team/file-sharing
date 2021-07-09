import {useContext} from 'react'
import {AuthContext} from '../../context/Auth.context'
import { useHistory } from "react-router-dom";
import { Navbar, Nav, Button, Dropdown, Form, Collapse } from 'bootstrap-4-react';

export const NavBar = () => {
    const auth = useContext(AuthContext)
    const history = useHistory()

    const logoutHandler = event => {
      event.preventDefault()
      auth.logout()
      history.push('/auth')
  }
    return (
        <Navbar expand="lg" light bg="light">
          <Navbar.Brand href="/admin">
            File Sharing
          </Navbar.Brand>
          <Navbar.Toggler target="#navbarSupportedContent" />
          <Collapse navbar id="navbarSupportedContent">
            <Navbar.Nav mr="auto">
              <Nav.Item active>
                <Nav.Link href="/admin">Главная</Nav.Link>
              </Nav.Item>
              <Nav.Item active>
                <Nav.Link href="/admin/messages">Чаты</Nav.Link>
              </Nav.Item>
              <Nav.Item active>
                <Nav.Link href="/admin/users">Управление данными</Nav.Link>
              </Nav.Item>
            </Navbar.Nav>
            <Form inline my="2 lg-0" onSubmit={logoutHandler}>
              <Button className="ms-3" success my="2 sm-0" onClick={logoutHandler}>Выйти</Button>
            </Form>
          </Collapse>
        </Navbar>
      )
}