import React from 'react';
import {Form, Button} from 'react-bootstrap'

export const AuthPage = () => {
    return(
        <div className="authForm h-100 row-sm-3 ">
            <Form className="col-lg-offset-2 my-auto w-500">
                
                <Form.Group>
                    <Form.Label>Авторизация</Form.Label>
                    <br />
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        Используйте eMail с доменом oiate.ru
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}