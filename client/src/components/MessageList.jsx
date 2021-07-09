import {Message} from './Message'

export const MessageList = ({messages}) => {
    if(!messages){
        return(
            <h5>Нет сообщений</h5>
        )
    }
    else{
        return(
            <>
                {Object.keys(messages).map((key) => {
                    return(
                        <Message message={messages[key]} />
                    )
                })}
            </>
        )
    }
}