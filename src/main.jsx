import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './Reducers/Store.js'
import { AuthProvider } from './Components/AuthContext.jsx'
import ReactModal from 'react-modal'


// ReactModal.setAppElement('#root')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>  
  <AuthProvider>
  <Provider store={store}> <App /></Provider>
  </AuthProvider> 
  </BrowserRouter>
 
  </React.StrictMode>,
)
