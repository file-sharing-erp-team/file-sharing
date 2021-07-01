import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {AppRouter} from './components/AppRouter'
import {AuthContext} from './context/Auth.context'
import {useAuth} from './context/hooks/auth.hook' 
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import './styles/index.scss'

function App() {
  const {login, logout, token, userId, ready} = useAuth()
  const isAuthenticated = !!token
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      
      <BrowserRouter>
        <AppRouter isAuth={isAuthenticated}/>
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
    </AuthContext.Provider>
  );
}

export default App;
