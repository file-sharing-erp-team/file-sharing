import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {AppRouter} from './components/AppRouter'
import {useHttp} from './context/hooks/http.hook'
import {AuthContext} from './context/Auth.context'
import {useAuth} from './context/hooks/auth.hook' 
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import './styles/index.scss'

function App() {
  const {login, logout, token, role, userId, ready} = useAuth()
  const {loading} = useHttp()
  const isAuthenticated = !!token
  const isAdmin = !!role
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, role, isAuthenticated
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
    </AuthContext.Provider>
  );
}

export default App;
