import React ,{useCallback, useState, useContext, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import { useHttp } from '../context/hooks/http.hook';
import { AuthContext } from '../context/Auth.context';
import { toast } from 'react-toastify';
import {NavBar} from './components/NavBar'
import {RequestPageCard} from './components/RequestPageCard'
import {Form, Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

export const CreateUserPage = () => {
    document.title = "FileSharing - Добавить пользователя"
    const [info, setInfo] = useState(null)
    const {loading, error, request, clearError} = useHttp()
    const {token, userId} = useContext(AuthContext)
    const history = useHistory()
    const [form, setForm] = useState( {
        login: '',
        password: '',
        first_name: '',
        last_name: '',
        middle_name: '',
        group_id: '',
        role: ''
    })

    const changeHandler = event => {
        setForm({ ...form , [event.target.name]: event.target.value})
    }

    const createUser = async (e) => {
        try{
            e.preventDefault();
            
            console.log({...form})
            const data = await request('/file_sharing/admUser/registerUser', 'POST', {...form},{
                Authorization: `Bearer ${token} `
            })
            console.log(data)

            history.push('/admin/users')
        }
        catch (e){
            toast.error(e.message)
        }
    }


    return(
        <div>
            <header>
                <NavBar />
            </header>
            <div className="container mx-auto" style={{backgroundColor: "white", borderRadius: "5px", height:"85vh", overflow: "auto", marginTop: '2rem'}}>
                <Form>
                    <Form.Control onChange={changeHandler} style={{marginTop: '10px'}} type="text" placeholder="Логин" name="login" />
                    <Form.Control onChange={changeHandler} style={{marginTop: '10px'}} type="password" placeholder="Пароль" name="password" />
                    <Form.Control onChange={changeHandler} style={{marginTop: '10px'}} type="text" placeholder="Имя" name="first_name"/>
                    <Form.Control onChange={changeHandler} style={{marginTop: '10px'}} type="text" placeholder="Фамилия" name="last_name"/>
                    <Form.Control onChange={changeHandler} style={{marginTop: '10px'}} type="text" placeholder="Отчество" name="middle_name"/>
                    <Form.Control onChange={changeHandler} style={{marginTop: '10px'}} type="text" placeholder="Группа" name="group_id"/>
                    <Form.Control onChange={changeHandler} style={{marginTop: '10px'}} type="text" placeholder="Роль" name="role" />
                    <br />
                    <Button variant="primary" onClick={createUser}>Зарегистрировать</Button>
                </Form>
            </div>
        </div>
    )
    
}