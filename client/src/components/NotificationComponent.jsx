import { NotificationCard } from "./NotificationCard"
import {Dropdown} from 'react-bootstrap'

export const NotificationComponent = ({notifications}) => {
    if(notifications === null){
        return(
            <>
                <Dropdown.Item className="mx-auto my-auto">Нет уведомлений</Dropdown.Item>
            </>
        )
    }
    else if(notifications.length === 0) {
        return(
            <>
                <Dropdown.Item className="mx-auto my-auto">Нет уведомлений</Dropdown.Item>
            </>
        )
    }
    else{
        return(
            <>
                {Object.keys(notifications).map(key => {
                    return(
                        <>
                            <NotificationCard notification={notifications[key]} /> 
                        </>
                    )
                })}
            </>
        )
    }
}