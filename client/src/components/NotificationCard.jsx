

export const NotificationCard = ({notification}) => {
    if(notification){
        return(
            <>
                {notification.text}
            </>
        )
    }
}