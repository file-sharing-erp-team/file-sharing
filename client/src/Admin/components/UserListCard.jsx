import {Card, Button} from 'react-bootstrap'
import DeleteIcon from '@material-ui/icons/Delete';
import { toast } from 'react-toastify';
import { useHttp } from '../../context/hooks/http.hook';
import { AuthContext } from '../../context/Auth.context';
import {useContext} from 'react'

export const UserListCard = ({user}) => {

    const {loading, error, request, clearError} = useHttp()
    const {token, userId} = useContext(AuthContext)

    const deleteHandler = async (e) => {
        try{
            e.preventDefault();
            
            const data = await request('/file_sharing/admUser/deleteUser', 'DELETE', {userID: user.id},{
                Authorization: `Bearer ${token} `
            })
            console.log(data)

        }
        catch (e){
            toast.error(e.message)
        }
    }

    if(user){
        return(
            <>
                <Card id="card2" style={{width: '250px',height: '150px', backgroundColor: 'light-gray', marginTop: "1rem", cursor: 'pointer', marginRight: '15px'}} >
                    <Card.Title style={{fontSize: "20px", padding: 0, marginTop: "4px", marginLeft: "4px"}}>{user.login}</Card.Title>
                    <Card.Body style={{fontSize: "15px", padding: 0, marginLeft: "4px"}}>{user.first_name} {user.middle_name} {user.last_name}</Card.Body>
                    <Card.Footer><Button onClick={deleteHandler} style={{float:'right'} } variant="danger"><DeleteIcon fontSize="small"/></Button></Card.Footer>
                </Card>
            </>
        )
    }
    else{
        return(
            <Card id="card" style={{width: '250px',height: '75px', backgroundColor: 'light-gray', marginTop: "1rem"}}>
                <Card.Title>Ошибка отображения пользователя</Card.Title>
            </Card>
        )
    }
}