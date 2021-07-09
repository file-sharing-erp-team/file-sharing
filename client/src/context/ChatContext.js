import {createContext} from 'react';

function noop() {}

export const ChatContext = createContext({
    chatId: null,
    push: noop(),
    pop: noop(),
    isChatOpen: false
})