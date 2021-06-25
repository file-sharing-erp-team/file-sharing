import React from 'react';
import {Form, Button , Card} from 'react-bootstrap'

export const AuthPage = () => {
    return(
        <div className=" w-100 min-vh-100 align-items-center" style={{display:'flex'}}>
            <Form className="min-vw-50 w-50 min-vh-50 h-50 row mx-auto my-auto no-gutters" style={{marginRight: 0, border:'.5px solid black', borderRadius:'30px', justifyContent:'center',backgroundColor: 'white'}}>
                <Form.Group className="col w-40" style={{width:'40%', marginRight: 0, padding: 0}}>
                    <Form.Group className="col  align-self-center">
                        <br />
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            Используйте Email с доменом oiate.ru
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="password" className="col  align-self-center">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox" className="col  align-self-center">
                        <Form.Check type="checkbox" label="Запомнить меня" style={{marginBottom: '20px'}}/>
                        
                        <Button variant="primary" type="submit" className="col  align-self-center">
                            Submit
                        </Button>
                    </Form.Group>
                </Form.Group>
                <Form.Group className="col w-100 mx-auto" style={{left:'5%', marginRight: 0 , width:'100%', marginBottom: 0, marginLeft: 0}}>
                    <Card className="" style={{height:'100%', width:'100%', border:'none' }}>
                        <Card.Img src="leaves.jpeg" style={{height:'100%', width:'100%', marginBottom: 0, borderRadius:"0 30px 30px 0"}} className="align-self-center my-auto"/>
                    </Card>
                </Form.Group>
            </Form>
            
        </div>
    )
}