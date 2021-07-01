import React from 'react'
import {useParams} from 'react-router-dom'
import { Form, InputGroup } from 'bootstrap-4-react';
import { Navig } from '../components/Navig';

export const CreateReqPage = () => {
    console.log(useParams().type)
    //Мат помощь
    if(useParams().type === '1'){
        return(
            <div>
                <header>
                    <Navig />
                </header>
                <div className="container mx-auto" style={{backgroundColor: "white", borderRadius: "5px", height:"85vh", overflow: "auto", marginTop: '2rem'}}>
                    <Form style={{marginTop: '1rem'}}>
                        <h3>Заявление на Материальную Поддержку</h3>
                        <br />
                        <InputGroup mb="3">
                            <InputGroup.PrependText>
                                Имя и Фамилия
                            </InputGroup.PrependText>
                            <Form.Input className="col" type="text" id="firstName" placeholder="Введите имя..." />
                            
                            <Form.Input className="col" type="text" id="lastName" placeholder="Введите фамилию..." />
                            
                        </InputGroup>
                        <Form.Group>
                            <label htmlFor="middleName">Отчество (при наличии)</label>
                            <Form.Input type="text" id="middleName" placeholder="Введите отчество..." />
                            <br />
                            <label htmlFor="groupId">Группа</label>
                            <Form.Input type="text" id="groupId" placeholder="Группа..." />
                            <br />
                            <label htmlFor="phoneNumber">Мобильный</label>
                            <InputGroup mb="2">
                                <InputGroup.PrependText>
                                    +7
                                </InputGroup.PrependText>
                                <Form.Input type="text" id="groupId" placeholder="Номер мобильного телефона..." />
                                
                            </InputGroup>
                            
                        </Form.Group>
                        <Form.Group>
                            
                        </Form.Group>
                        <Form.Group>
                            
                        </Form.Group>
                        <Form.Group>
                            <label htmlFor="exampleControlsFile1">Example file</label>
                            <Form.File id="exampleControlsFile1"/>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        )
    }

    return(
        <div>
            <h1>Ничего нет</h1>
        </div>
    )
}