import { NotificationCard } from "./NotificationCard"
import {Dropdown} from 'react-bootstrap'

export const NotificationComponent = ({notifications}) => {
    if(notifications === null){
        return(
            <>
                <h5 className="mx-auto my-auto">Нет уведомлений</h5>
            </>
        )
    }
    else{
        return(
            <>
                {Object.keys(notifications).map(key => {
                    return(
                        <Dropdown.Item key={key}>
                            <NotificationCard notification={notifications[key]} /> 
                        </Dropdown.Item>
                    )
                })}
            </>
        )
    }
}