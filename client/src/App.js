import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {AppRouter} from './components/AppRouter'
import {useHttp} from './context/hooks/http.hook'
import {AuthContext} from './context/Auth.context'
import {useAuth} from './context/hooks/auth.hook' 
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import {useChat} from './context/hooks/chat.hook'

import './styles/index.scss'
import { ChatContext } from './context/ChatContext'

function App() {
  const {login, logout, token, role, userId, ready} = useAuth()
  const {push, pop, chatId} = useChat()
  const {loading} = useHttp()
  const isAuthenticated = !!token
  const isChatOpen = !!chatId
  let isAdmin = false
  if(role === 1){
    isAdmin = true
  }
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, role, isAuthenticated
    }}>
      <ChatContext.Provider value={{
        push, pop, chatId, isChatOpen
      }}>
      <div className="App">
        <BrowserRouter>
          {!loading && <AppRouter isAuth={isAuthenticated} role={isAdmin}/>}
        </BrowserRouter>
        <ToastContainer
                      position="bottom-right"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover 
        />
      </div>
      </ChatContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
