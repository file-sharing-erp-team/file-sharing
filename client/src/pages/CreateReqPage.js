import React, {useEffect, useState, useRef} from 'react'
import {useParams} from 'react-router-dom'
import { Form, InputGroup } from 'bootstrap-4-react';
import { Button , Toast} from 'react-bootstrap'
import { Navig } from '../components/Navig';
import {useHttp} from '../context/hooks/http.hook'
import {useMessage} from '../context/hooks/message.hook'
import {useAuth} from '../context/hooks/auth.hook'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify'
import Dropzone from 'react-dropzone';


export const CreateReqPage = () => {
    document.title = "FileSharing - Создать новый запрос"
    const {loading, error, request, clearError} = useHttp()
    const {token, role, userId} = useAuth()
    const [show, setShow] = useState(false);
    const message = useMessage()
    const dropRef = useRef()
    const [form, setForm] = useState( {
        type: useParams().type,
        userId: userId,
        firstName: '',
        lastName: '',
        middleName: '',
        groupId: '',
        phoneNumber: '',
        course: ''
    })

    const [files, setFiles] = useState([])

    const changeHandler = event => {
        setForm({ ...form , [event.target.name]: event.target.value})
    }

    

    useEffect(() => {
        console.log("Error" + error)
        if(error !== null){
            toast(error)
        }
        
        //clearError()
    }, [error])

    const fileUpload = (files) => {
        //console.log(event)
        setFiles(files)
    }

    const createReq = e => {
        e.preventDefault()

        const formData = new FormData();
        console.log({...files})
        //const arFiles = Object.keys(files).map((key) => files[key])
       
        for(let i = 0; i < files.length; i++) {
            formData.append('files', files[i])
        }
        formData.append("userID", userId)
        formData.append("type", form.type)
        formData.append("firstName", form.firstName)
        formData.append("lastName", form.lastName)
        formData.append("middleName", form.middleName)
        formData.append("phone", form.phoneNumber)
        formData.append("group", form.groupId)
        formData.append("course", form.course)


        axios.put('http://localhost:5000/file_sharing/docs/create',formData, {headers: {'Authorization': `Bearer ${token}`}})
        .then(res => {
            console.log(res)
            toast.success(res.message, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        })
        .catch(err => {
            toast.error(err.message, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
    }


    console.log(useParams().type)
    //Мат помощь
    if(useParams().type){
        return(
            <div>
                
                <header>
                    <Navig />
                </header>
                
                <div className="container mx-auto" style={{backgroundColor: "white", borderRadius: "5px", height:"85vh", overflow: "auto", marginTop: '2rem'}}>
                    <Form style={{marginTop: '1rem'}} onSubmit={createReq}>
                        <h3>Новое заявление</h3>
                        <br />
                        <InputGroup mb="3">
                            <InputGroup.PrependText>
                                Имя и Фамилия
                            </InputGroup.PrependText>
                            <Form.Input 
                            className="col" 
                            type="text" 
                            id="firstName"
                            name="firstName" 
                            placeholder="Введите имя..." 
                            onChange={changeHandler}
                            />
                            
                            <Form.Input 
                            className="col" 
                            type="text" 
                            id="lastName" 
                            placeholder="Введите фамилию..." 
                            name="lastName"
                            onChange={changeHandler}
                            />
                            
                        </InputGroup>
                        <Form.Group>
                            <label htmlFor="middleName">Отчество (при наличии)</label>
                                <Form.Input type="text" id="middleName" placeholder="Введите отчество..." name="middleName" onChange={changeHandler}/>
                            <br />
                            <label htmlFor="groupId">Группа</label>
                                <Form.Input type="text" id="groupId" placeholder="Группа..." name="groupId" onChange={changeHandler}/>
                            <br />
                            <label htmlFor="phoneNumber">Мобильный</label>
                            <InputGroup mb="2">
                                <InputGroup.PrependText>
                                    +7
                                </InputGroup.PrependText>
                                <Form.Input type="text" id="phoneNumber" placeholder="Номер мобильного телефона..." name="phoneNumber" onChange={changeHandler}/>
                                
                            </InputGroup>
                            <label htmlFor="course">Номер курса</label>
                            <InputGroup mb="2">
                                
                                <Form.Input type="text" id="course" placeholder="Номер курса..." name="course" onChange={changeHandler}/>
                                
                            </InputGroup>
                            
                        </Form.Group>
                        <Form.Group style={{color:'red'}}>
                            
                        </Form.Group>
                        
                        <Form.Group >
                            <Form.Group>
                                <Dropzone onDrop={fileUpload}>
                                
                                        {({ getRootProps, getInputProps }) => (
                                        <div {...getRootProps({ className: 'drop-zone' })} ref={dropRef}>
                                            <input {...getInputProps()} />
                                            <p>Drag and drop a file OR click here to select a file</p>
                                            {files && (
                                            <div style={{fontSize:'13px'}}>
                                                {Object.keys(files).map((key) => {
                                                    return(
                                                        <p>
                                                            {files[key].name}
                                                        </p>
                                                    )
                                                })}
                                            </div>
                                            )}
                                        </div>
                                        )}
                                    
                                </Dropzone>
                            </Form.Group>
                            <Form.Group >
                                <Button variant="primary" type="submit" className="col  align-self-center">
                                    Отправить
                                </Button>
                            </Form.Group>
                        </Form.Group>
                    </Form>
                   
                </div>
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                        <Toast.Header>
                            <strong className="mr-auto">Уведомление</strong>
                            <small>File Sharing</small>
                        </Toast.Header>
                        <Toast.Body>{error}</Toast.Body>
                </Toast>
            </div>
        )
    }

    return(
        <div>
            <h1>Ничего нет</h1>
        </div>
    )
}