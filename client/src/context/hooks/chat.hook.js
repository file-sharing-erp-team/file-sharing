import {useCallback, useState, useEffect} from 'react'

const storageName = 'currentChat'

export const useChat = () => {
    const [ready, setReady] = useState(false)
    const [chatId, setChatId] = useState(null)

    const push = useCallback((id) => {
        setChatId(id)
        

        localStorage.setItem(storageName, JSON.stringify({
            chatId: id
        }))
    }, [])


    const pop = useCallback(() => {
        setChatId(null)
        
        localStorage.removeItem(storageName)
    }, [])


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if(data){
            push(data.chatId)
        }
        setReady(true)
    }, [push])

    return {push, pop, chatId, ready}
}