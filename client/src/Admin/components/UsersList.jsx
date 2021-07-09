import {UserListCard} from './UserListCard'

export const UsersList = ({users}) => {
    if(!users){
        return(
            <>
                <h6 className="mx-auto my-auto">Пользователей нет </h6>
            </>
        )
    }
    else{
        return(
            <div style={{width: '100%', height: '93%'}}>
                <h4>Пользователи</h4>
                <div style={{display: 'flex', overflow: 'auto',height: '90%'}}>
                    {Object.keys(users).map(key => {
                        return(
                            <UserListCard user={{...users[key]}} />
                        )
                    })}
                </div>
            </div>
        )
    }
}